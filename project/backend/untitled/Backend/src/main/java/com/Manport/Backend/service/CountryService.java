package com.Manport.Backend.service;


import com.Manport.Backend.domain.Country;

import java.util.List;


public interface CountryService {

    List<Country> getCountries();

    int getLiveCountry(Long id);

    void deleteCountry(long id);
}
