package com.Manport.Backend.domain;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name="application")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="app_id")
    private Long appID;

    @Column (name = "app_name")
    private String app_name;

    @Column (name = "app_fullname")
    private String app_fullname;

    @Column(name="app_shortcode")
    private String app_shortcode;

    @Column(name="app_stoprisk")
    private Boolean app_stoprisk;

    @Column(name="app_show")
    private Boolean app_show;

    @CreationTimestamp
    @Column(name="app_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy")
    protected Date app_date;

    @ManyToOne
    @JoinColumn(name="responsibleteam_id")
    private ResponsibleTeam responsibleteam;

    @ManyToOne
    @JoinColumn(name="businessarea_id")
    private BusinessArea businessarea;

    @ManyToOne
    @JoinColumn(name="backend_id")
    private Backend backend;

    @ManyToOne
    @JoinColumn(name="frontend_id")
    private Frontend frontend;

    @ManyToOne
    @JoinColumn(name="database_id")
    private Database database;

    @OneToMany(cascade = CascadeType.REMOVE,orphanRemoval = true)
    @JsonIgnore
    @JoinColumn(name="app_id")
    private List<Country> countries;

}
