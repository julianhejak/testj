package demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//zmiana do dev_test
@RestController
public class HelloController {

	@RequestMapping("/hello")
	public String hello(@RequestParam String name) {
		return "Hello "+name;
	}
}
