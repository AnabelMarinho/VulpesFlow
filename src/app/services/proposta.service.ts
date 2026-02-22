import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";

export interface PropostaPayload {
  interesses: string[];
  nome: string;
  email: string;
  descricao: string;
  orcamento: string;
  anexo?: File;
}

@Injectable({
  providedIn: "root",
})
export class PropostaService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.apiUrl}/api/propostas/vulpesflow`;

  enviarProposta(payload: PropostaPayload): Observable<any> {
    const formData = new FormData();

    payload.interesses.forEach((interesse) => {
      formData.append("interesses", interesse);
    });

    formData.append("nome", payload.nome);
    formData.append("email", payload.email);
    formData.append("descricao", payload.descricao);
    formData.append("orcamento", payload.orcamento);

    if (payload.anexo) {
      formData.append("anexo", payload.anexo);
    }

    return this.http.post(this.endpoint, formData, {
      responseType: "text" as "json",
    });
  }
}
