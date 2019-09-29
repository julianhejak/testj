package demo.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Cacheable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Cache;
import org.springframework.cache.annotation.Caching;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
//1 komit
// 2 komit
@Entity(name = "klient")
@Table(schema = "public")
public class Klient {

	@Id
	@GeneratedValue
	private Integer id;
	
	private String first_name;
	
	private String surname;
	
	private String post_code;
	
	@Column(name="create_accout_date")
	@Temporal(TemporalType.DATE)
	private Date createAccoutDate;
	
	@Column(name="status_account")
	private boolean statusAccount;

	@OneToMany(mappedBy="klient", fetch = FetchType.LAZY, cascade = {CascadeType.REMOVE})
	@JsonManagedReference
	private Set<Zamowienie> zamowienie = new HashSet<Zamowienie>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Set<Zamowienie> getZamowienie() {
		return zamowienie;
	}

	public void setZamowienie(Set<Zamowienie> zamowienie) {
		this.zamowienie = zamowienie;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getPost_code() {
		return post_code;
	}

	public void setPost_code(String post_code) {
		this.post_code = post_code;
	}

	public void addZamowieni(Zamowienie zamowienie) {
		zamowienie.setKlient(this);
		this.zamowienie.add(zamowienie);
	}

	public Date getCreateAccoutDate() {
		return createAccoutDate;
	}

	public void setCreateAccoutDate(Date createAccoutDate) {
		this.createAccoutDate = createAccoutDate;
	}

	public boolean isStatusAccount() {
		return statusAccount;
	}

	public void setStatusAccount(boolean statusAccount) {
		this.statusAccount = statusAccount;
	}
	
}
