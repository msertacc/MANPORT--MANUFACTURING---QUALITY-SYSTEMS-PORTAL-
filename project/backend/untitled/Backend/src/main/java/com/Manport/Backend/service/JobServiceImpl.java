package com.Manport.Backend.service;

import com.Manport.Backend.dao.JobRepository;
import com.Manport.Backend.domain.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;


    @Override
    public List<Job> getAll() {
        return StreamSupport
                .stream(jobRepository.findAll().spliterator(),false)
                .collect(Collectors.toList());
    }

    @Override
    public List<Job> lastIssues() {
        return jobRepository.lastIssues();
    }

    @Override
    public void delete(long id) {
        jobRepository.deleteById(id);
    }

    @Override
    public List<Job> findProblematicJobs() {
        return jobRepository.findProblematicJobs();
    }
}
