package com.Manport.Backend.resource;

import com.Manport.Backend.domain.Country;
import com.Manport.Backend.service.CountryServiceImpl;
import com.Manport.Backend.shared.GenericResponse;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/1.0")
public class CountryController {

    private final CountryServiceImpl countryService;

    public CountryController(CountryServiceImpl countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/countries")
    List<Country> getCountries(){
        return countryService.getCountries();
    }

    @GetMapping("/liveappcountry/{id}")
    Integer countLiveApp(@PathVariable Long id){
        return countryService.getLiveCountry(id);
    }

    @DeleteMapping("/deletecountry/{id}")
    GenericResponse deleteCountry(@PathVariable long id){
        countryService.deleteCountry(id);
        return new GenericResponse("country removed");
    }
}
