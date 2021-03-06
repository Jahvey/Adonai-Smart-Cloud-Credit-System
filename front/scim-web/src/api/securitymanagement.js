import {myGet,myPost2,myPost} from '@/utils/request1'
import request from '@/utils/request'
export function getPersonCustomerList(queryParams) {
  return myPost('/mybatis-service/customer/natural/naturalPerson',queryParams);
}
export function saveBasicCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/saveGrtCollateral',param);
}
//更新存单以及抵质押物信息
export function updateGrtDepositAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateGrtDepositAndGrtCollateral',param);
}
//根据id查询存单以及抵质押物信息
export function selectGrtDepositByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectGrtDepositByGuarantyId',param);
}
//获取共有人列表
export function getAllTogetherCorrelative(param) {
  return myPost2('/mybatis-service/grtTogetherCorrelative/getAllTogetherCorrelative',param);
}
//批量删除共有人ById
export function deleteTogetherCorrelativeById(param) {
  return myPost2('/mybatis-service/grtTogetherCorrelative/deleteTogetherCorrelativeById',param);
}
//批量删除共有人
export function deleteTogetherCorrelativedBatch(param) {
  return myPost2('/mybatis-service/grtTogetherCorrelative/deleteTogetherCorrelativedBatch',param);
}
//保存共有人信息
export function saveTogetherCorrelatived(param) {
  return myPost2('/mybatis-service/grtTogetherCorrelative/saveTogetherCorrelatived',param);
}
//更新共有人信息
export function updateTogetherCorrelatived(param) {
  return myPost2('/mybatis-service/grtTogetherCorrelative/updateTogetherCorrelatived',param);
}

//获取抵质押物保险列表
export function getAllCollateralInsurance(param) {
  return myPost2('/mybatis-service/grtCollateralInsurance/getAllCollateralInsurance',param);
}
//删除抵质押物保险ById
export function deleteCollateralInsuranceById(param) {
  return myPost2('/mybatis-service/grtCollateralInsurance/deleteCollateralInsuranceById',param);
}
//批量删除抵质押物保险
export function deleteCollateralInsuranceBatch(param) {
  return myPost2('/mybatis-service/grtCollateralInsurance/deleteCollateralInsuranceBatch',param);
}
//保存抵质押物保险信息
export function saveCollateralInsurance(param) {
  return myPost2('/mybatis-service/grtCollateralInsurance/saveCollateralInsurance',param);
}
//更新抵质押物保险信息
export function updateCollateralInsurance(param) {
  return myPost2('/mybatis-service/grtCollateralInsurance/updateCollateralInsurance',param);
}
//获取抵质押物公证列表
export function getAllCollateralNotarization(param) {
  return myPost2('/mybatis-service/grtCollateralNotarization/getAllCollateralNotarization',param);
}
//删除抵质押物公证ById
export function deleteCollateralNotarizationById(param) {
  return myPost2('/mybatis-service/grtCollateralNotarization/deleteCollateralNotarizationById',param);
}
//批量删除抵质押物公证
export function deleteCollateralNotarizationBatch(param) {
  return myPost2('/mybatis-service/grtCollateralNotarization/deleteCollateralNotarizationBatch',param);
}
//保存抵质押物公证信息
export function saveCollateralNotarization(param) {
  return myPost2('/mybatis-service/grtCollateralNotarization/saveCollateralNotarization',param);
}
//更新抵质押物公证信息
export function updateCollateralNotarization(param) {
  return myPost2('/mybatis-service/grtCollateralNotarization/updateCollateralNotarization',param);
}
//获取抵质押物登记列表
export function getAllCollateralRegistration(param) {
  return myPost2('/mybatis-service/grtCollateralRegistration/getAllCollateralRegistration',param);
}
//删除抵质押物登记ById
export function deleteCollateralRegistrationById(param) {
  return myPost2('/mybatis-service/grtCollateralRegistration/deleteCollateralRegistrationById',param);
}
//批量删除抵质押物登记
export function deleteCollateralRegistrationBatch(param) {
  return myPost2('/mybatis-service/grtCollateralRegistration/deleteCollateralRegistrationBatch',param);
}
//保存抵质押物登记信息
export function saveCollateralRegistration(param) {
  return myPost2('/mybatis-service/grtCollateralRegistration/saveCollateralRegistration',param);
}
//更新抵质押物登记信息
export function updateCollateralRegistration(param) {
  return myPost2('/mybatis-service/grtCollateralRegistration/updateCollateralRegistration',param);
}
//获取抵质押物意外列表
export function getAllCollateralAccident(param) {
  return myPost2('/mybatis-service/grtCollateralAccident/getAllCollateralAccident',param);
}
//删除抵质押物意外ById
export function deleteCollateralAccidentById(param) {
  return myPost2('/mybatis-service/grtCollateralAccident/deleteCollateralAccidentById',param);
}
//批量删除抵质押物意外
export function deleteCollateralAccidentBatch(param) {
  return myPost2('/mybatis-service/grtCollateralAccident/deleteCollateralAccidentBatch',param);
}
//保存抵质押物意外信息
export function saveCollateralAccident(param) {
  return myPost2('/mybatis-service/grtCollateralAccident/saveCollateralAccident',param);
}
//更新抵质押物意外信息
export function updateCollateralAccident(param) {
  return myPost2('/mybatis-service/grtCollateralAccident/updateCollateralAccident',param);
}
//更新在建工程信息
export function updateBuildingProjectAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateBuildingProjectAndGrtCollateral',param);
}
//根据id查询在建工程信息
export function selectBuildingProjectByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectBuildingProjectByGuarantyId',param);
}
//更新机动车信息
export function updateTrafficCarAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateTrafficCarAndGrtCollateral',param);
}
//更新机动车信息
export function selectTrafficCarByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectTrafficCarByGuarantyId',param);
}
//更新船舶信息
export function updateShipAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateShipAndGrtCollateral',param);
}
//根据id查询船舶信息
export function selectShipByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectShipByGuarantyId',param);
}
//更新房地产信息
export function updateRealEstateAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateRealEstateAndGrtCollateral',param);
}
//根据id查询房地产信息
export function selectRealEstateByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectRealEstateByGuarantyId',param);
}
//更新土地使用权信息
export function updateLandUseRightAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateLandUseRightAndGrtCollateral',param);
}
//更新土地使用权信息
export function selectLandUseRightByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectLandUseRightByGuarantyId',param);
}
//更新工资账户信息
export function updateEarningsAccountAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateEarningsAccountAndGrtCollateral',param);
}
//根据id查询工资账户信息
export function selectEarningsAccountByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectEarningsAccountByGuarantyId',param);
}
//更新其他质押信息
export function updateOtherAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateOtherAndGrtCollateral',param);
}
//根据id查询其他质押信息
export function selectOtherByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectOtherByGuarantyId',param);
}
//更新土地经营权信息
export function updateLandManagementRightAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateLandManagementRightAndGrtCollateral',param);
}
//根据id查询土地经营权信息
export function selectLandManagementRightByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectLandManagementRightByGuarantyId',param);
}
//更新土存货信息
export function updateMerchandiseAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateMerchandiseAndGrtCollateral',param);
}
//根据id查询土存货信息
export function selectMerchandiseByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectMerchandiseByGuarantyId',param);
}
//更新收费权信息
export function updateChargingRightMortgageAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateChargingRightMortgageAndGrtCollateral',param);
}
//根据id查询收费权信息
export function selectChargingRightMortgageByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectChargingRightMortgageByGuarantyId',param);
}
//更新债券信息
export function updateBondPledgeAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateBondPledgeAndGrtCollateral',param);
}
//根据id查询债券信息
export function selectBondPledgeByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectBondPledgeByGuarantyId',param);
}
//更新林权信息
export function updateWoodlandPropertyAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateWoodlandPropertyAndGrtCollateral',param);
}
//根据id查询林权信息
export function selectWoodlandPropertyByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectWoodlandPropertyByGuarantyId',param);
}
//更新知识产权信息
export function updateIntellPropertyRightsAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateIntellPropertyRightsAndGrtCollateral',param);
}
//根据id查询知识产权信息
export function selectIntellPropertyRightsByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectIntellPropertyRightsByGuarantyId',param);
}
//更新应收账款信息
export function updateReceivableAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateReceivableAndGrtCollateral',param);
}
//更新应收账款信息
export function selectReceivableByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectReceivableByGuarantyId',param);
}
//更新应股权信息
export function updateStockWarrantAssetsAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateStockWarrantAssetsAndGrtCollateral',param);
}
//根据id查询应股权信息
export function selectStockWarrantAssetsByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectStockWarrantAssetsByGuarantyId',param);
}
//更新基金信息
export function updateFundAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateFundAndGrtCollateral',param);
}
//根据id查询基金信息
export function selectFundByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectFundByGuarantyId',param);
}
//更新票据信息
export function updateBillAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateBillAndGrtCollateral',param);
}//根据id选择票据信息
export function selectBillByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectBillByGuarantyId',param);
}
//更新仓单信息
export function updateStandardDepotImpawnAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateStandardDepotImpawnAndGrtCollateral',param);
}
//根据id查询仓单信息
export function selectStandardDepotImpawnByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectStandardDepotImpawnByGuarantyId',param);
}
//更新保单信息
export function updateGuaranteeSlipAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateGuaranteeSlipAndGrtCollateral',param);
}
//根据id查询保单信息
export function selectGuaranteeSlipByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectGuaranteeSlipByGuarantyId',param);
}
//更新机器设备信息
export function updateMachineEquipmentAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateMachineEquipmentAndGrtCollateral',param);
}
//更新机器设备信息
export function selectMachineEquipmentByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectMachineEquipmentByGuarantyId',param);
}
//更新交通运输工具信息
export function updateTrafficOthersAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateTrafficOthersAndGrtCollateral',param);
}
//根据id查询交通运输工具信息
export function selectTrafficOthersByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectTrafficOthersByGuarantyId',param);
}
//更新农机具信息
export function updateAgricultureToolAndGrtCollateral(param) {
  return myPost2('/mybatis-service/grtCollateral/updateAgricultureToolAndGrtCollateral',param);
}
//更新根据id查询农机具信息
export function selectAgricultureToolByGuarantyId(param) {
  return myGet('/mybatis-service/grtCollateral/selectAgricultureToolByGuarantyId',param);
}
//查询所有的抵质押品信息
export function selectGrtCollateralAll(param) {
  return myGet('/mybatis-service/grtCollateral/selectGrtCollateralAll',param);
}
//根据id删除所有的抵质押品信息
export function deleteGrtCollateralById(param) {
  return myGet('/mybatis-service/grtCollateral/deleteGrtCollateralById',param);
}
//批量删除抵质押品信息
export function deleteGrtCollateralBatch(param) {
  return myGet('/mybatis-service/grtCollateral/deleteGrtCollateralBatch',param);
}
