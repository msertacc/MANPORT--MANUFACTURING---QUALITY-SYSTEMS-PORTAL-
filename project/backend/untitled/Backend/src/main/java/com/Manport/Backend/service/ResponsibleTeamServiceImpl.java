package com.Manport.Backend.service;

import com.Manport.Backend.dao.ResponsibleTeamRepository;
import com.Manport.Backend.domain.ResponsibleTeam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponsibleTeamServiceImpl implements ResponsibleTeamService {

    @Autowired
    private ResponsibleTeamRepository responsibleTeamRepository;

    public List<ResponsibleTeam> getTeams() {
        return responsibleTeamRepository.findAll();
    }
}
