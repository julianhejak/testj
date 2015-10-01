package demo.dto;

import java.util.Set;

import demo.model.Zamowienie;

public class ZamowienieDto {

	private Integer id;

	private String nazwa;

	private Integer klientId;
	
	private double price;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNazwa() {
		return nazwa;
	}

	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}

	public Integer getKlientId() {
		return klientId;
	}

	public void setKlientId(Integer klientId) {
		this.klientId = klientId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
