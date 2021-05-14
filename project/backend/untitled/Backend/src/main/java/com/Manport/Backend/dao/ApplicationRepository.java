package com.Manport.Backend.dao;

import com.Manport.Backend.domain.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends JpaRepository<Application,Long> {

        List<Application> findAllByOrderByAppIDAsc();
}
