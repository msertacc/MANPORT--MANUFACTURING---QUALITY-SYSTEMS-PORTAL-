package com.Manport.Backend.service;

import com.Manport.Backend.domain.Job;

import java.util.List;

public interface JobService {

    List<Job> getAll();
    List<Job> lastIssues();

    void delete(long id);

    List<Job> findProblematicJobs();
}
