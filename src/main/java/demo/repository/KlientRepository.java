package demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import demo.model.Klient;

@Repository
//@RepositoryRestResource(path="klient")
public interface KlientRepository extends CrudRepository<Klient, Integer>{
	
    List<Klient> findAll();	

}
