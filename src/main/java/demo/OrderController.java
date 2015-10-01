package demo;

import java.util.ArrayList;
import java.util.List;

import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import demo.dto.ZamowienieDto;
import demo.model.Klient;
import demo.model.Zamowienie;
import demo.repository.KlientRepository;
import demo.repository.OrderRepository;
import demo.unit.CurrencyCourse;
import demo.unit.MapperZamowienie;

@Controller
@RequestMapping("/rest/order")
public class OrderController {

	private CurrencyCourse test;
	
	@Autowired
	private  OrderRepository orderRepository;
	
	@RequestMapping(method=RequestMethod.GET)
    public @ResponseBody List<Zamowienie> getAllOrder() {
		return orderRepository.findAll();
    }
	
	@RequestMapping(value="/enum",method=RequestMethod.GET)
    public @ResponseBody CurrencyCourse[] getEnum() {
		return  CurrencyCourse.values();
    }
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	@ResponseBody
    public Zamowienie getOrderById(@PathVariable("id") Integer id) {
		return orderRepository.findOne(id);
    }
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
    public void updateKlient(@PathVariable("id") Integer id ,@RequestBody ZamowienieDto zamowienieDto) {
		
		MapperZamowienie factory = new MapperZamowienie();
		Zamowienie zam = factory.map(zamowienieDto, Zamowienie.class);
		orderRepository.save(zam);

    }
	
	@RequestMapping(method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Zamowienie> addOrder(@RequestBody ZamowienieDto zamowienieDto) {
		MapperZamowienie factory = new MapperZamowienie();
		Zamowienie zam = factory.map(zamowienieDto, Zamowienie.class);
		
		Zamowienie zamu = orderRepository.save(zam);
		return  new ResponseEntity<Zamowienie>(zamu, HttpStatus.OK);
    }
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
    public String deleteKlientById(@PathVariable("id") Integer id) {
		orderRepository.delete(id);
		return "deleteInfo";
    }
}
