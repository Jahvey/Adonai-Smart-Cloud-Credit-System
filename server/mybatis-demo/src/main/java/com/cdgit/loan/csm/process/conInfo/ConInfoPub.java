/**
 * 
 */
package com.cdgit.loan.csm.process.conInfo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdgit.loan.csm.mapper.CsmGrtMapper;

/**
 * @author cwalk
 *
 */
@Service
@Transactional
public class ConInfoPub {
	
	@Autowired
	CsmGrtMapper csmGrtMapper;
	
	/**
	 *TODO  查询合同信息并拼装Map
	 * @param contractId
	 * @return
	 */
	public Map selConInfo(String contractId){
		//总Map
    	Map contractMap = new HashMap();
    	
    	//主合同Map
    	Map contractInfoMap = new HashMap();
    	List<HashMap<String,Object>> conInfos = csmGrtMapper.selConInfo(contractId);
    	/*
         * 信贷字段：CONTRACT_NUM,PRODUCT_TYPE,BEGIN_DATE,END_DATE,CONTRACT_AMT,CURRENCY_CD,GUARANTY_TYPE,MAIN_GUARANTY_TYPE,CON_STATUS
         * 押品字段：
         * 		ctr_no	合同编号
				bsn_tp_cd	业务品种
				ctr_eff_dt	合同生效日期
				ctr_mat_dt	合同到期日期
				ctr_amt	合同金额
				//ctr_bal	合同余额
				ctr_ccy_cd	合同币种
				guar_tp_cd	合同担保类型
				primary_guar_tp_cd	主要担保方式
				ctr_sts_cd	合同状态
         */
        /* 押品：
         * opr_org_no 经办机构
		   opr_user_no 经办人
		          信贷：
		   CON.USER_NUM ,CON.ORG_NUM
         */
    	if(conInfos.size()>0){
    		for (HashMap<String, Object> dob : conInfos) {
				contractInfoMap.put("ctr_no", dob.get("contractNum"));
				contractInfoMap.put("bsn_tp_cd", dob.get("productType"));
    			contractInfoMap.put("ctr_eff_dt", dob.get("beginDate"));
    			contractInfoMap.put("ctr_mat_dt", dob.get("endDate"));
    			contractInfoMap.put("ctr_amt", dob.get("contractAmt"));
    			contractInfoMap.put("ctr_ccy_cd", dob.get("currencyCd"));
    			contractInfoMap.put("guar_tp_cd", dob.get("guarantyType"));
    			contractInfoMap.put("primary_guar_tp_cd", dob.get("mainGuarantyType"));
    			contractInfoMap.put("ctr_sts_cd", dob.get("conStatus"));
    			contractInfoMap.put("opr_user_no", dob.get("userNum"));
    			contractInfoMap.put("opr_org_no", dob.get("orgNum"));
			}
    	}
    	contractMap.put("b_cc_main_contract", contractInfoMap);
    	//查询合同项下担保合同信息
        /*
        /*押品字段
				 	guar_ctr_no担保合同编号:guarCtrNo
					gnr_ccy_cd担保币种:gnrCcyCd
					guar_ctr_amt担保合同金额:guarCtrAmt
					guar_ctr_sts_cd担保合同状态:guarCtrStsCd
					guar_tp_cd担保类型:guarTpCd
					guar_user_no担保人编号:guarUserNo
					gur_user_nm担保人名称:gurUserNm
					start_dt开始日期:startDt
					mat_dt到期日期:matDt
					max_guar_ctr_flg是否最高额担保合同:maxGuarCtrFlg
					pb_guar_tp_cd保证担保类型:pbGuarTpCd
					
			信贷：
			TA.SUBCONTRACT_NUM,TA.BZ,TO_CHAR(TA.SUBCONTRACT_AMT) AS SUBCONTRACT_AMT,TA.SUBCONTRACT_STATUS,TA.SUBCONTRACT_TYPE,
			TC.PARTY_NUM,TC.PARTY_NAME,TO_CHAR(TA.BEGIN_DATE,'YYYYMMDD') AS BEGIN_DATE,TO_CHAR(TA.END_DATE,'YYYYMMDD') AS END_DATE,
			TA.IF_TOP_SUBCON
				*/
    	//担保合同map
    	List<HashMap> guarantylist = new ArrayList<HashMap>();
    	
    	List<HashMap<String,Object>> guarInfos = csmGrtMapper.selGuarInfo(contractId);
    	
    	if(guarInfos.size()>0){
    		for (HashMap<String, Object> dob : guarInfos) {
    			HashMap<String, Object> guarantyInfoMap = new HashMap();
    			guarantyInfoMap.put("guar_ctr_no", dob.get("SUBCONTRACT_NUM"));
    			guarantyInfoMap.put("gnr_ccy_cd", dob.get("BZ"));
    			//modi by shangmf:if_top_subcon为0时对应subcontract_amt；if_top_subcon为1时对应zgbjxe
    			if(dob.get("IF_TOP_SUBCON")!= null && (dob.get("IF_TOP_SUBCON")).equals("0")){
    				System.out.println("SUBCONTRACT_AMT"+dob.get("SUBCONTRACT_AMT"));
    				guarantyInfoMap.put("guar_ctr_amt", dob.get("SUBCONTRACT_AMT"));
    			}else if(dob.get("IF_TOP_SUBCON")!= null && (dob.get("IF_TOP_SUBCON")).equals("1")){
    				System.out.println("ZGBJXE"+dob.get("ZGBJXE"));
    				guarantyInfoMap.put("guar_ctr_amt", dob.get("ZGBJXE"));
    			}else{
    				guarantyInfoMap.put("guar_ctr_amt","0");
    			}
    			guarantyInfoMap.put("guar_ctr_sts_cd", dob.get("SUBCONTRACT_STATUS"));
    			guarantyInfoMap.put("guar_tp_cd", dob.get("SUBCONTRACT_TYPE"));
    			guarantyInfoMap.put("guar_user_no", dob.get("PARTY_NUM"));
    			guarantyInfoMap.put("gur_user_nm", dob.get("PARTY_NAME"));
    			
    			if( dob.get("BEGIN_DATE") != null ){
    				guarantyInfoMap.put("start_dt", dob.get("BEGIN_DATE"));
    			}else{
    				guarantyInfoMap.put("start_dt","");
    			}
    			if( dob.get("END_DATE") != null ){
    				guarantyInfoMap.put("mat_dt", dob.get("END_DATE"));
    			}else{
    				guarantyInfoMap.put("mat_dt", "");
    			}
    			
    			guarantyInfoMap.put("max_guar_ctr_flg", dob.get("IF_TOP_SUBCON"));
    			
    			guarantylist.add(guarantyInfoMap);
    			
    			
			}
    		//如果为信用，则不用给此map赋值
            contractMap.put("b_cc_guaranty_contract", guarantylist);
    		
    	}
    	
    	//如果为信用，则不用给此map赋值
        //contractMap.put("b_cc_guaranty_contract", guarantylist);
        
      //查询担保合同与押品的关联信息
        /*
        /*押品字段
				guaranty_relative.set("contractno", (String) guarantyRelativeMap.get("guar_ctr_no"));
				guaranty_relative.set("collateralNo", (String) guarantyRelativeMap.get("collateral_no"));
					
			信贷：
			TC.RELATION_ID,TA.SUBCONTRACT_NUM,TD.SURETY_NO 
				*/
        //担保合同与押品关联关系
    	List guarantyRelativeList = new ArrayList();
    	
    	List<HashMap<String,Object>> guarCollRelInfos = csmGrtMapper.selCollInfo(contractId);
    	
    	if(guarCollRelInfos.size()>0){
    		
    		for (HashMap<String, Object> dob : guarCollRelInfos) {
    			Map guarantyRelativeMap = new HashMap();
    			
    			guarantyRelativeMap.put("serial_no", dob.get("RELATION_ID"));
    			guarantyRelativeMap.put("guar_ctr_no", dob.get("SUBCONTRACT_NUM"));
    			guarantyRelativeMap.put("collateral_no", dob.get("SURETY_NO"));
    			
    			guarantyRelativeList.add(guarantyRelativeMap);
    			
			}
    		//如果为信用，则不用给此map赋值
            contractMap.put("b_cc_guaranty_relative", guarantyRelativeList);
    	}
    	

    	
    	return contractMap;
	}
	

}
