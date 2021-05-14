package com.Manport.Backend.service;

import com.Manport.Backend.dao.ApplicationRepository;
import com.Manport.Backend.dao.BusinessAreaRepository;
import com.Manport.Backend.dao.ResponsibleTeamRepository;
import com.Manport.Backend.dto.ApplicationDTO;
import com.Manport.Backend.domain.Application;
import com.Manport.Backend.domain.BusinessArea;
import com.Manport.Backend.domain.ResponsibleTeam;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceImpl implements ApplicationService{
    
    private final ApplicationRepository applicationRepository;

    private final BusinessAreaRepository businessAreaRepository;

    private final ResponsibleTeamRepository responsibleTeamRepository;

    public ApplicationServiceImpl(ApplicationRepository applicationRepository, BusinessAreaRepository businessAreaRepository, ResponsibleTeamRepository responsibleTeamRepository) {
        this.applicationRepository = applicationRepository;
        this.businessAreaRepository = businessAreaRepository;
        this.responsibleTeamRepository = responsibleTeamRepository;
    }




        @Override
        public List<Application> getApps() {
            return applicationRepository.findAllByOrderByAppIDAsc();
        }

    @Override
    public Optional<Application> getById(Long id){
        return applicationRepository.findById(id);
    }

    @Override
    public void delete(long id) {
        applicationRepository.deleteById(id);
    }

    public Application addApp(ApplicationDTO applicationDTO) {
        BusinessArea businessArea = businessAreaRepository.findById(applicationDTO.getBusinessarea_id());
        ResponsibleTeam responsibleTeam = responsibleTeamRepository.findById(applicationDTO.getResponsibleteam_id());

        Application application = new Application();
        application.setApp_fullname(applicationDTO.getApp_fullname());
        application.setApp_name(applicationDTO.getApp_name());
        application.setApp_shortcode(applicationDTO.getApp_shortcode());
        application.setApp_stoprisk(applicationDTO.getApp_stoprisk());
        application.setBusinessarea(businessArea);
        application.setResponsibleteam(responsibleTeam);
        return applicationRepository.save(application);
    }

    @Override
    public boolean checkExistedApp(Long id) {
        return applicationRepository.existsById(id);
    }

    @Override
    public Application updateApp(Application application) {
        return applicationRepository.save(application);
    }


}
