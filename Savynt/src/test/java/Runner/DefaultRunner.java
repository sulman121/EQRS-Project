package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(




features="src\\test\\resources\\Features"
,glue = "Steps", dryRun = false, monochrome=true

,plugin = {
		"pretty", "html:target/cucumber-reports/Cucumber-pretty",
		"json:target/cucumber-reports/Cucumbertestreports.json" }

)











public class DefaultRunner {

}
