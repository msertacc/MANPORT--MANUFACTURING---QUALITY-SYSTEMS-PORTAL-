package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "database")
public class Database {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="database_id")
    private Long database_id;

    @Column(name="database_name")
    private String database_name;

    @OneToMany
    @JsonIgnore
    @JoinColumn(name="database_id")
    private List<Application> apps;

}
