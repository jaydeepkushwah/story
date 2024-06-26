export class Common {
    userId: string;
    search: string;
    applicationId: string;
    sort: string;
    currentPage: number;
    documentSize: number;
}
export class addApplicant {
    first_name: string;
    last_name: string;
    dob: string;
    email: string;
    mobile: string;
    selfie_file: any;
    pan_number: string;
    pin_code: string;
    policy_number: string;
    basic_details: any;
}
export class applicantBasicDetails {
    pin_code: string;
    pan_number: string;
    dob: string;
    first_name: string;
    last_name: string;
    age: string;
    selfie: string;
    selfie_base64: string;
    selfie_file: string;
    email: string;
    id: string;
    mobile_number: string;
    policy_number: string;

}
export class DocFeedbackForm {
    source: any;
    destination: any;
}
export class VerifyRules {
    rules_decision: any;
    rules_pending_and_error: any;
    summary: any;
}
export class RulesModel {
    ruleTitle: any;
    details: any;
    decision: any;
    errors: any;
}
export class PrimaryDetails {
    address: string;
    age: string;
    bmi_analysis: string;
    bmi_index: string;
    current_address: string;
    dob: string;
    education: string;
    email_id: string;
    existing_insurance: string;
    full_name: string;
    gender: string;
    height_cm: string;
    mobile_no: string;
    face_base64: string;
    organization_name: string;
    permanent_address: string;
    pin_code: string;
    predicted_age: string;
    predicted_bmi: string;
    predicted_bmi_analysis: string;
    predicted_gender: string;
    predicted_smoker: string;
    weight_kg: string;
    face_file_field: any;
    father_name: any;
    first_name: any;
    last_name: any;
    signature_file_field: any;
    yob: any;
}
export class HealthModal {
    document_data: any;
    document_list: Array<any>;
    document_listObj: any;
    medical_question_data: any;
    medical_question_data_yes_part: any;
    substance_consumption: any;
    summary_data: any;
    telemer: any;
}
export class BankstatementModal {
    docGeneral: any;
}
export class ApplicantDetails {
    consumer_credibility_narration: string;
    last_updated_datetime: string;
    consumer_credibility_score: any;
    cics_score : any;
    case_status: any;
    alerts: any;
    decision_summary: any;
    decision: any;
    plan_name: any;
    premium: any;
    sum_assured: any;
    total_file_count: any;
    policy_id: any;
    contact_details: any;
    personal_details: any;
    profilePic: any;
    alertError: any;
    alertPending: any;
}
export class OverPlanDetails {
    "Plan Details": any;
    "Plan Name": any;
    plan: any;
    Riders: any;
    av_estimated_income: any;
    insurance_coverage: any;
    premium: any;
    premium_price_change: any;
    sum_assured: any;
    sec_sum_assured: any;
}
export class OverviewScore {
    drc_category: any;
    financial_score: any;
    fraud: any;
    health_score: any;
    insured_crif_risk_score: any;
    insured_crif_score: any;
    prevalent_disease_risk: any;
    proposer_crif_risk_score: any;
    proposer_crif_score: any;
    risk: any;
    total_fincl_risk: any;

}
export class OverviewDigital {
    alcohol: any;
    company: any;
    connected_account: any;
    education: any;
    interest: any;
    kyc: any;
    political: any;
    profession: any;
    smoking: any;
    social_score: any;
}
export class OverviewHealthData {
    document_data: any;
    document_list: any;
    medical_question_data: any;
    medical_question_data_yes_part: any;
    substance_consumption: any;
    summary_data: any;
    telemer: any;
}
export class OverviewFinancialInfo {
    basic_details: any;
    financial_alerts: any;
    financial_critical_risk_alerts: any;
    financial_documents_present: any;
    financial_underwriting: any;
    income_matching: any;
}
export class OverviewKyc {
    aml: any;
    basic_info: any;
    docs_presents: any;
    kyc_matching: any;
}
export class OverviewPredictiveInsights {
    age: any;
    bmi: any;
    bmi_analysis: any;
    gender: any;
    income: any;
    location: any;
    smoke: any;
}
export class FeedbackForm {
    reason_rejection: any;
    uw_decision: any;
    feedbackButton: any;
    uw_final_comments: any;
}
export class FeedbackFormNew {
    financial: any;
    medical: any;
    risk: any;
    decision: any;
}
export class OverviewDecision {
    application_id: any;
    case_status: any;
    decision: any;
    decision_summary: any;
    delisted_center: any;
    key_alerts: any;
    match: any;
    past_data: any;
    standard: any;
}
export class OverviewMedical {
    diagnostic_report: any;
    framingham_heart_report: any;
    ecg: any;
    health_apps: any;
    health_questions: any;
    mer_reports: any;
}
export class OverviewEarlyClaims {
    age_impact: any;
    aqi_impact: any;
    bmi_impact: any;
    decision: any;
    epidemic_impact: any;
    frauds_impact: any;
    income_segment_impact: any;
    mortality_impact: any;
    risky_pincode: any;
    sanitation_impact: any;

    early_claims_decision: any;
    early_claims_probability_percentage: any;
}
export class OverviewEnvironmental {
    aqi_overview: any;
    covid_overview: any;
    location_score_overview: any;
    mortality_overview: any;
    sanitation_overview: any;
    weather_overview: any;
}
export class OverviewDesignModel {
    decision: any;
    appliedSumAssured: any;
    predictedSumAssured: any;

    calculatedPremium: any;
    predictedPremium: any;
    premiumPriceChange: any;

    secondaryDecision: any;
    primaryDecision: any;
    healthScore: any;
    sumAssured: any;
    premium: any;
    pincode: any;
    decisionSummary: any;

    businessRuleDecision: any;
    brDecisionReason: any;
    medNonMed: any;
    fraudNegative: any;
    finEligibility: any;
    delistedCenter: any;
    confidenceScore: any;
    existingInsurance: any;
    avEstimatedIncome: any;
    insuranceCoverage: any;
    planDetails: any;
    planDetail: any;
    riders: Array<any>;

    financialScore: any;
    finBankStatementScore: any;
    incomeSegment: any;
    healthScoreCheck: any;
    crifScore: any;
    prevalentDesease: any;
    fraudScore: any;
    riskScore: any;
    age: any;
    bmiIndex: any;
    education: any;
    gender: any;
    organizationName: any;
    socialScore: any;
    connectedAccount: any;
    profession: any;
    digitalEducation: any;
    company: any;
    alcohol: any;
    smoking: any;
    political: any;
    kyc: any;
    interest: any;
    kycName: any;
    kycYob: any;
    kycFatherName: any;
    docAadhar: any;
    docDl: any;
    docPan: any;
    docPassport: any;
    docVoterId: any;
    amlAddsProof: any;
    amlAnnualIncome: any;
    amlAnnualPremium: any;
    amlchannel: any;
    amlDecision: any;
    amlIdentityProof: any;
    amlIncomeProof: any;
    predictiveAge: any;
    predictiveBmi: any;
    predictiveBmiAnalysis: any;
    predictiveGender: any;
    predictiveIncome: any;
    predictiveLocation: any;
    predictiveSmoke: any;
    mortalityCharge: any;
    locationScore: any;
    sanitationScore: any;
    companyScore: any;
    designationScore: any;
    extremeRisk: any;
    weatherRiskScore: any;
    accountNumber: any;
    openingBal: any;
    closingBal: any;
    accBefore30days: any;
    bounceChequeTrxn: any;
    itrBefore2mnt: any;
    medTrxn: any;
    premiumDetected: any;
    relationWithBank: any;
    trxnAnamoly: any;
    finCheque: string;
    finCrif: string;
    finSalarySlip: string;
    finEestimatedIncome: any;
    finIncomeFromBankStatements: any;
    finIncomeFromBureau: any;
    finIncomeFromItr: any;
    finIncomeFromSalary: any;
    finIncomeFromSalarySlip: any;
    finAnnualIncome: any;
    finFinEligibility: any;
    finUwAmount: any;
    finAsset: any;
    finLiabilities: any;
    finOutstandingPayments: any;
    finPaymentHistory: any;
    medicalDiagnosticRisk: any;
    medicalDiagnosticScore: any;
    medicalHighAlerts: any;
    medicalPrimaryIndications: any;
    medicalTestsPredictedValue: any;
    merBbmiAnalysis: any;
    merBmiIndex: any;
    merMerRisk: any;
    merHeightCm: any;
    merHeightFts: any;
    merHeightInches: any;
    merMerScore: any;
    merWeightKg: any;
    merNarrations: any;
    merPrimaryIndications: any;
    appBmi: any;
    appBodyFat: any;
    appCalories: any;
    appFitnessLevel: any;
    appPremiumImpact: any;
    appTotalActivity: any;
    healthQuestions: any;
    earlyClaimsDecision: any;
    earlyClaimsProbabilityPercentage: any;
    financialCase: any;
    negativePincode: any;
    pastData: any;
    aqiScore: any;
    aqiNarration: any;
    aqiMajorHealthDiseases: any;
    financialReason: any;
    finSumAssuredAmount: any;
    finDecision: any;
    finAdditionalDocsRequired: any;
    bmiReason: any;
    aqiReason: any;
    weatherReason: any;
    sanitationReason: any;
    mortalityReason: any;
    merReason: any;
    locationReason: any;
    epidemicReason: any;
    diagnosticReason: any;
    diagnosticScore: any;
    merScore: any;
    caseStatus: any;
    cicsScore: any;
    applicantPhoto: any;
    signatureMatchPerc: any;
    matchAddress: any;
    matchFaceMatchPerc: any;
    matchFatherName: any;
    matchFirstName: any;
    matchFullName: any;
    matchLastName: any;
    matchYob: any;
    bRules: any;
    finDocRules: any;
    finalDecision: any;
    insProductCatRules: any;
    labRules: any;
    medicalRules: any;
    productBasicRules: any;
    decisionGiven: any;
    CommentGiven: any;
    productEdate: any;
    productcompanyName: any;
    productpolicyNumber: any;
    productInputMatching_parameter: any;
    productSumAssured: any;
    productDopDoc: any;
    productPolicyStatus: any;
    productRecordLastUpdated: any;
    productCompanyNumber: any;
    productCompanyName: any;
    productIsNegativeMatch: any;
    productDateOfExit: any;
    productDateOfDeath: any;
    productCauseOfDeath: any;
    productdbno: any;
    currentRuleNav: any
    rulesTotalErrors: any;
    rulesTotalPending: any;
    isDigitel: boolean;
    demographicPart: any;
    demographicPartBmi: any;
    demographicPartSmoke: any;
    coverage: any;
    coveragePotential: any;
    demographicPartKey: any[];
    merData: any;
    familyHistory: any;
    sanitationNarrationImpaHealth: any;
    sanitationNarrationImpaMortality: any;
    covidState: any;
    covidDistrict: any;
    morbidityResponse: any;
    covidConfirmed: any;
    covidActive: any;
    covidDeceased: any;
    covidRecovered: any;
    earlyClaimsRiskCategory: any;
    healthRisk: any;
    healthNarrations: any;
    healthTestReport: any;
    healthTestsAnalysis: any;
    individualMerDiseaseRisk: any;
    healthHighTestReport: any;
    healthQuestionsUW: any;
    sanitationRisk: any;
    mortalityRawData: any;
    medicalEcg: any;
    healthQuestionsAppForm: any;
    healthQuestionsmer: any;
    finBankStatement: string;
    finForm16: string;
    finForm16A: string;
    finItr: string;
    finPassbook: string;
    finCoi: string;
    finIncomeFromApplicationForum: string;
    medicalFraminghamHeart: any;
    social: any;
    dob: any;
    email: any;
    educationList: any;
    jobList: any;
    finIncomeFromCOI: string;
    secAppliedSumAssured: string;
    feedbackButton: any;
    medicalHighIndications: any;
    medicalLowIndications: any;
    images: any;
    phones: any;
    urls: any;
    smoke_detection_response: any;
    addresses: any;
    iibData: any;
    smoke_detection: any;
    medical: any;
    fraud_detection: any;
    fraud_detectionLabel: any;
    location_based_fraud_insights: any;
    diagnostic_data_in_cities_and_state: any;
    financial_fraud_non_fraud_location: any;
    income_data_in_cities_and_state: any;
    civil_fraud: any;
    claims_fraud_risk: any;
    creditAccountActive: any;
    creditAccountClosed: any;
    CAIS_Account: any;
    CAISAccounts: any;
    cADSuitFiledCurrentBalance: any;
    creditAccountDefault: any;
    creditAccountTotal: any;
    Outstanding_Balance_All: any;
    Outstanding_Balance_Secured: any;
    Outstanding_Balance_Secured_Percentage: any;
    Outstanding_Balance_UnSecured: any;
    Outstanding_Balance_UnSecured_Percentage: any;
    amountFinanced: any;
    durationOfAgreement: any;
    enquiryReason: any;
    financePurpose: any;
    subscriberName: any;
}