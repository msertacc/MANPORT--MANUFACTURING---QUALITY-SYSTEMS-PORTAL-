package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name="server")
public class Server {

    @Column(name="server_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long server_id;

    @Column(name="server_name")
    private String server_name;

    @OneToMany(cascade = CascadeType.REMOVE,orphanRemoval = true)
    @JsonIgnore
    @JoinColumn(name="server_id")
    private List<Job> jobs;

    @ManyToOne
    @JoinColumn(name="country_id")
    private Country country;
}
