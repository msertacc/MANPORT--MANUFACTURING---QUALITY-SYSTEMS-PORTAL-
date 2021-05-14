package com.Manport.Backend.service;

import com.Manport.Backend.dto.ApplicationDTO;
import com.Manport.Backend.domain.Application;

import java.util.List;
import java.util.Optional;

public interface ApplicationService {
    List<Application> getApps();
    Optional<Application> getById(Long id);
    void delete(long id);
    Application addApp(ApplicationDTO applicationDTO);
    boolean checkExistedApp(Long id);
    Application updateApp(Application application);
}