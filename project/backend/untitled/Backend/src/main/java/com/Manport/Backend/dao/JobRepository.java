package com.Manport.Backend.dao;

import com.Manport.Backend.domain.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job,Long> {


    @Query(nativeQuery = true
            ,
            value="select * from job where job.state_id <3 order by job.job_updated desc limit 3")
    List<Job> lastIssues();

    @Query(nativeQuery = true, value = "select *from job where job.state_id<4")
    List<Job> findProblematicJobs();
}
