package com.Manport.Backend.dao;

import com.Manport.Backend.domain.BusinessArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessAreaRepository extends JpaRepository<BusinessArea,Long> {

    BusinessArea findById(long id);

}
