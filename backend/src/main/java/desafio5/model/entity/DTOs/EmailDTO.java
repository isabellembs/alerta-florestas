package desafio5.model.entity.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class EmailDTO {
    private String to;
    private String subject;
    private String content;
}



