package com.Manport.Backend.service;

import com.Manport.Backend.dao.BusinessAreaRepository;
import com.Manport.Backend.domain.BusinessArea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessAreaServiceImpl implements BusinessAreaService {

    @Autowired
    private BusinessAreaRepository businessAreaRepository;

    @Override
    public List<BusinessArea> getAreas() {
        return businessAreaRepository.findAll();
    }
}
