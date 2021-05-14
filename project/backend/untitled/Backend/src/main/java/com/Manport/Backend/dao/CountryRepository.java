package com.Manport.Backend.dao;

import com.Manport.Backend.domain.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface CountryRepository extends JpaRepository<Country,Long> {

    @Query(nativeQuery = true, value="select count(*) from country where country.app_id = :app_id ")
    int countLiveCountry(@Param("app_id") long id);
}
