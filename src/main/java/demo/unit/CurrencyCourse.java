package demo.unit;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(using = OrderTypeSerializer.class)
//@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum CurrencyCourse {

	USD(3.72),
	DE(3.72);
	
	private double curse;
	
	CurrencyCourse(){}
	
	CurrencyCourse(double curse){
		this.curse = curse;
	}

	public double getCurse() {
		return curse;
	}

	public void setCurse(double curse) {
		this.curse = curse;
	}
	
	
}
