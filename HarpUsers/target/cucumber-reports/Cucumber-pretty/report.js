$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Registration.feature");
formatter.feature({
  "name": "Registration Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Creating Users",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is at Registation Page and enter all info",
  "keyword": "Given "
});
formatter.match({
  "location": "GUIStepDefination.user_is_at_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/SavyntAccess.feature");
formatter.feature({
  "name": "Savynt Access",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "LOA3 and No MFA",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is at savynt login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});