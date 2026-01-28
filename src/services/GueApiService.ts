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

  try {
    const apiUrl = (import.meta.env.VITE_API_URL || import.meta.env.vite_api_url) || 'https://api-gue-three.vercel.app';
    const params = new URLSearchParams({
      name: name.trim(),
      ...(area && { area })
    });

    const res = await fetch(`${apiUrl}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) throw new Error(`Erro ao conectar com o servidor (status ${res.status})`);

    const data: GueApiResponse = await res.json();
    return data;
  } catch (err: any) {
    return { exists: false, suggestions: [], error: err.message || 'Erro desconhecido' };
  }
}
