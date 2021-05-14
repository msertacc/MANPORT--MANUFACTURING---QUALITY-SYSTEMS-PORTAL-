package com.Manport.Backend.service;

import com.Manport.Backend.dao.CountryRepository;
import com.Manport.Backend.domain.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<Country> getCountries() {
        return countryRepository.findAll();
    }

    @Override
    public int getLiveCountry(Long id) {
        return countryRepository.countLiveCountry(id);
    }

    @Override
    public void deleteCountry(long id) {
        countryRepository.deleteById(id);
    }


}
