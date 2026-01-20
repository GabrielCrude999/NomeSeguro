export interface GueApiResponse {
  exists: boolean;
  suggestions: string[];
  error?: string;
}

export async function checkCompanyName(name: string, area?: string): Promise<GueApiResponse> {
  // Se o nome tiver menos de 4 caracteres, não faz chamada
  if (name.trim().length < 4) {
    return { exists: false, suggestions: [], error: 'O nome deve ter pelo menos 4 letras' };
  }

  const formData = new FormData();
  formData.append('name', name.trim());
  if (area) formData.append('area', area);

  try {
    const res = await fetch('/api.php', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) throw new Error(`Erro ao conectar com o servidor (status ${res.status})`);

    const data: GueApiResponse = await res.json();
    return data;
  } catch (err: any) {
    return { exists: false, suggestions: [], error: err.message || 'Erro desconhecido' };
  }
}
