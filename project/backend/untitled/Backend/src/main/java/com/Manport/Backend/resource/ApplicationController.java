package com.Manport.Backend.resource;

import com.Manport.Backend.dao.BusinessAreaRepository;
import com.Manport.Backend.dao.ResponsibleTeamRepository;
import com.Manport.Backend.dto.ApplicationDTO;
import com.Manport.Backend.domain.Application;
import com.Manport.Backend.domain.BusinessArea;
import com.Manport.Backend.domain.ResponsibleTeam;
import com.Manport.Backend.service.ApplicationServiceImpl;
import com.Manport.Backend.shared.GenericResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/1.0")
public class ApplicationController {

    private final ApplicationServiceImpl applicationService;

    private final ResponsibleTeamRepository responsibleTeamRepository;

    private final BusinessAreaRepository businessAreaRepository;

    public ApplicationController(ApplicationServiceImpl applicationService, ResponsibleTeamRepository responsibleTeamRepository, BusinessAreaRepository businessAreaRepository) {
        this.applicationService = applicationService;
        this.responsibleTeamRepository = responsibleTeamRepository;
        this.businessAreaRepository = businessAreaRepository;
    }

    @GetMapping("/management")
    public List<Application> getApplication(){
        return applicationService.getApps();
    }


    @GetMapping("/management/{id}")
    ResponseEntity<?> getGroup(@PathVariable Long id) {
        Optional<Application> app = applicationService.getById(id);
        return (ResponseEntity.ok().body(app));

    }

    @DeleteMapping("/management/{id}")
    GenericResponse deleteApp(@PathVariable long id){
        applicationService.delete(id);
        return new GenericResponse("app removed");
    }

    @PostMapping("/management/newapp")
    public Application addApplication(@RequestBody ApplicationDTO applicationDTO){
        return applicationService.addApp(applicationDTO);
    }

    @PutMapping("/management/edit/{id}")
    public ResponseEntity<?> updateApplication(@RequestBody ApplicationDTO applicationDTO,@PathVariable long id){
        try{
            if(applicationService.checkExistedApp(id)){
                Application application = applicationService.getById(id).get();
                ResponsibleTeam responsibleTeam = responsibleTeamRepository.findById(applicationDTO.getResponsibleteam_id());
                BusinessArea businessArea = businessAreaRepository.findById(applicationDTO.getBusinessarea_id());
                application.setResponsibleteam(responsibleTeam);
                application.setBusinessarea(businessArea);
                application.setApp_shortcode(applicationDTO.getApp_shortcode());
                application.setApp_name(applicationDTO.getApp_name());
                application.setApp_fullname(applicationDTO.getApp_fullname());
                application.setApp_stoprisk(applicationDTO.getApp_stoprisk());
                application.setApp_show(applicationDTO.getApp_show());
                applicationService.updateApp(application);
                return new ResponseEntity<>(new GenericResponse("Successfully!, App Updated"), HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(new GenericResponse("Failed! Cannot found App"),HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception e){
            return new ResponseEntity<>(new GenericResponse("Failure, Try Again!"),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("management/updatestoprisk/{id}")
    public Application updateStopRisk(@PathVariable Long id){
        Application application = applicationService.getById(id).get();
        application.setApp_stoprisk(!application.getApp_stoprisk());
        return applicationService.updateApp(application);
    }
    @PutMapping("management/updateappshow/{id}")
    public Application updateAppShow(@PathVariable Long id){
        Application application = applicationService.getById(id).get();
        application.setApp_show(!application.getApp_show());
        return applicationService.updateApp(application);
    }




}
