package com.Manport.Backend.service;


import com.Manport.Backend.domain.Server;

import java.util.List;


public interface ServerService {


    List<Server> getAll();

    int getCountCountry(Long id);
}
