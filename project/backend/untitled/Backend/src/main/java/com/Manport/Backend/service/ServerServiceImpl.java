package com.Manport.Backend.service;

import com.Manport.Backend.dao.ServerRepository;
import com.Manport.Backend.domain.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ServerServiceImpl implements ServerService {

    @Autowired
    private ServerRepository serverRepository;


    @Override
    public List<Server> getAll() {
        return serverRepository.findAll();
    }

    @Override
    public int getCountCountry(Long id) {
        return serverRepository.countCountCountry(id);
    }
}
