package demo.unit;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class OrderTypeSerializer extends JsonSerializer<CurrencyCourse>{

	@Override
	public void serialize(CurrencyCourse value, JsonGenerator generator,
			SerializerProvider provider) throws IOException,
			JsonProcessingException {
		
		generator.writeStartObject();
		generator.writeStringField("currency", value.name());
	    generator.writeNumberField("cours", value.getCurse());
	    generator.writeEndObject();
		
	}

}
