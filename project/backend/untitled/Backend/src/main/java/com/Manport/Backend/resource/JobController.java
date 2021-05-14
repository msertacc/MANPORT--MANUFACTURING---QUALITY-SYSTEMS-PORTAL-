package com.Manport.Backend.resource;

import com.Manport.Backend.dao.JobRepository;
import com.Manport.Backend.domain.Job;
import com.Manport.Backend.service.JobServiceImpl;
import com.Manport.Backend.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/1.0")
public class JobController {

    @Autowired
    private JobServiceImpl jobService;

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/job")
    public List<Job> findall(){
        return jobRepository.findAll();
    }

    @GetMapping("/problematicjob")
    public List<Job> findProblematicJobs(){
        return jobService.findProblematicJobs();
    }

    @GetMapping("/lastissues")
    public List<Job> lastIssues(){return jobService.lastIssues();}

    @DeleteMapping("/job/{id}")
    GenericResponse deleteJob(@PathVariable long id){
        jobService.delete(id);
        return new GenericResponse("job removed");
    }
}
