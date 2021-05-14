package com.Manport.Backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name= "country")
public class Country  {

    @Id
    @Column(name="country_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long country_id;

    @Column(name="country_tag")
    private String country_tag;

    @Column(name="country_name")
    private String country_name;

    @Column(name="country_fullname")
    private String country_fullname;

    @Column(name="country_shortcode")
    private String country_shortcode;

    @Column(name = "country_jdk")
    private String country_jdk;

    @Column(name = "country_jetty")
    private String country_jetty;

    @Column(name = "country_nodejs")
    private String country_nodejs;

    @OneToMany(cascade = CascadeType.REMOVE,orphanRemoval = true)
    @JsonIgnore
    @JoinColumn(name="country_id")
    private List<Server> server;

    @ManyToOne
    @JoinColumn(name="app_id")
    private Application app;

}
