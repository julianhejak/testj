package demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//zmiana do dev_test test jeszcze jedna zmina zmiana jeszcze raz
//zmiana na master
//zmiany do brancz
// tu mamy zmianyn na master
@RestController
public class HelloController {

	@RequestMapping("/hello")
	public String hello(@RequestParam String name) {
		return "Hello "+name;
	}
}
