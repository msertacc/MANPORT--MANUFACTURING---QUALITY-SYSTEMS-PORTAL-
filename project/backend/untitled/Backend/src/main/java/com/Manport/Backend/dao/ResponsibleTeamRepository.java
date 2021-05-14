package com.Manport.Backend.dao;

import com.Manport.Backend.domain.ResponsibleTeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponsibleTeamRepository extends JpaRepository<ResponsibleTeam,Long> {

    ResponsibleTeam findById(long responsibleteamId);
}
