$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AccessDev3.feature");
formatter.feature({
  "name": "Access for Dev3",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user get access for DEV 3",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at savynt login page",
  "keyword": "Given "
});
formatter.match({
  "location": "GUIStepDefination.user_is_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Get the Access",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefination.user_Get_the_Access()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user is at savynt login page",
  "keyword": "Given "
});
formatter.match({
  "location": "GUIStepDefination.user_is_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});