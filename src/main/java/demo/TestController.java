package demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

//test test
@Controller
public class TestController {

	 @RequestMapping("/test.html")
	    public String getListUsersView(Model model) {
	        //ModelMap model = new ModelMap();
			//test
	        return "test";
	    }
	
}
