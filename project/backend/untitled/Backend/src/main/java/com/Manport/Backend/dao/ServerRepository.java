package com.Manport.Backend.dao;

import com.Manport.Backend.domain.Server;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServerRepository extends JpaRepository<Server,Long> {

    @Query(nativeQuery = true, value="select count(*) from server where server.country_id = :country_id ")
    int countCountCountry(@Param("country_id") long id);
}
