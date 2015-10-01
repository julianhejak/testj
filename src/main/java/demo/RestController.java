package demo;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

























import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.Validator;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import demo.model.Klient;
import demo.model.Zamowienie;
import demo.repository.KlientRepository;
import demo.repository.OrderRepository;

@Controller
@RequestMapping("/rest/klient")
public class RestController {

	@Autowired
	private  KlientRepository clientRepository;
	
	@RequestMapping(method=RequestMethod.GET)
    public @ResponseBody List<Klient> getAllKlient() {
		List<Klient> klients = clientRepository.findAll();
		return klients;
    }
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	@ResponseBody
    public Klient getKlientById(@PathVariable("id") Integer id) {
		return clientRepository.findOne(id);
    }
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public String deleteKlientById(@PathVariable("id") Integer id) {
		clientRepository.delete(id);
		return "deleteInfo";
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
    public ResponseEntity<Klient> updateKlient(@PathVariable("id") Integer id ,@RequestBody Klient klient) {
		Klient kl = clientRepository.save(klient);
		return  new ResponseEntity<Klient>(kl, HttpStatus.OK);
    }

	@RequestMapping(method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Klient> addKlient(@RequestBody Klient klient) {
		Klient kl = clientRepository.save(klient);
		return  new ResponseEntity<Klient>(kl, HttpStatus.OK);
    }
	
}
