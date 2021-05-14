package com.Manport.Backend.dto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApplicationDTO {

    private Long app_id;
    private String app_name;
    private String app_fullname;
    private String app_shortcode;
    private Boolean app_stoprisk;
    private Boolean app_show;
    private long responsibleteam_id;
    private long businessarea_id;

}
