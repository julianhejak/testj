package demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import demo.model.Klient;
import demo.model.Zamowienie;

public interface OrderRepository extends CrudRepository<Zamowienie, Integer>{
	
    List<Zamowienie> findAll();	

}