package demo.unit;

import demo.dto.ZamowienieDto;
import demo.model.Zamowienie;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.ConfigurableMapper;

public class MapperZamowienie extends ConfigurableMapper {

	protected void configure(MapperFactory factory) {
		factory.classMap(Zamowienie.class, ZamowienieDto.class)
				.field("id", "id").field("nazwa", "nazwa").field("price", "price")
				.field("klient.id", "klientId").byDefault().register();
	}
}
