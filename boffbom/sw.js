/* BoffBom · copia sin conexión de la versión web. Lo genera build-all.sh: no editar a mano.
   - La página se pide siempre a la red primero (así llega la última versión) y, si no hay red, sale la copia guardada.
   - Sonidos, música e íconos se sirven de la copia guardada; cada versión del juego usa su propia copia y borra la anterior.
   - Los pedidos por trozos (Range) de la música se responden desde la copia: Safari los exige para reproducir audio. */
const V = 'boffbom-1.9.1-d4d52c71';
const CORE = ['index.html', 'manifest.webmanifest', 'icon.png', 'icon192.png'];
const REST = ["snd/acid_pop_0.mp3", "snd/bad_0.mp3", "snd/bombbeep_0.mp3", "snd/boom_0.mp3", "snd/boom_1.mp3", "snd/bounce_0.mp3", "snd/bounce_1.mp3", "snd/box_0.mp3", "snd/caos_0.mp3", "snd/count_0.mp3", "snd/count_last_0.mp3", "snd/dryfire_0.mp3", "snd/es_end.mp3", "snd/es_fb.mp3", "snd/es_fight.mp3", "snd/es_lose.mp3", "snd/es_m2.mp3", "snd/es_m3.mp3", "snd/es_m4.mp3", "snd/es_m5.mp3", "snd/es_m6.mp3", "snd/es_r10.mp3", "snd/es_r12.mp3", "snd/es_r3.mp3", "snd/es_r5.mp3", "snd/es_r8.mp3", "snd/es_yourwin.mp3", "snd/flesh_0.mp3", "snd/flesh_1.mp3", "snd/flesh_2.mp3", "snd/flyby_0.mp3", "snd/fuse_0.mp3", "snd/geyser_0.mp3", "snd/good_0.mp3", "snd/headshot_0.mp3", "snd/heart_0.mp3", "snd/impact_0.mp3", "snd/impact_1.mp3", "snd/impact_2.mp3", "snd/impact_3.mp3", "snd/impact_4.mp3", "snd/jet_0.mp3", "snd/kill_0.mp3", "snd/land_0.mp3", "snd/land_1.mp3", "snd/lowammo_0.mp3", "snd/mapgo_0.mp3", "snd/modechange_0.mp3", "snd/mus_0.mp3", "snd/mus_1.mp3", "snd/mus_2.mp3", "snd/pick_0.mp3", "snd/rack_0.mp3", "snd/reload_0.mp3", "snd/reload_pistol_0.mp3", "snd/reload_shotgun_0.mp3", "snd/respawn_0.mp3", "snd/slime_0.mp3", "snd/slime_1.mp3", "snd/splash_0.mp3", "snd/splash_1.mp3", "snd/step_0.mp3", "snd/step_1.mp3", "snd/step_2.mp3", "snd/step_3.mp3", "snd/step_grass_0.mp3", "snd/step_grass_1.mp3", "snd/step_grass_2.mp3", "snd/step_grass_3.mp3", "snd/step_metal_0.mp3", "snd/step_metal_1.mp3", "snd/step_metal_2.mp3", "snd/step_snow_0.mp3", "snd/step_snow_1.mp3", "snd/step_snow_2.mp3", "snd/step_snow_3.mp3", "snd/step_wood_0.mp3", "snd/step_wood_1.mp3", "snd/step_wood_2.mp3", "snd/step_wood_3.mp3", "snd/sting_0.mp3", "snd/teleport_0.mp3", "snd/throw_0.mp3", "snd/thunder_0.mp3", "snd/tick_0.mp3", "snd/ui_click_0.mp3", "snd/ui_close_0.mp3", "snd/ui_open_0.mp3", "snd/v_end.mp3", "snd/v_fb.mp3", "snd/v_fight.mp3", "snd/v_lose.mp3", "snd/v_m2.mp3", "snd/v_m3.mp3", "snd/v_m4.mp3", "snd/v_m5.mp3", "snd/v_m6.mp3", "snd/v_m_cementerio.mp3", "snd/v_m_fabrica.mp3", "snd/v_m_finca.mp3", "snd/v_m_glaciar.mp3", "snd/v_m_islas.mp3", "snd/v_m_luna.mp3", "snd/v_m_neon.mp3", "snd/v_m_ruinas.mp3", "snd/v_m_tormenta.mp3", "snd/v_m_volcan.mp3", "snd/v_narr.mp3", "snd/v_r10.mp3", "snd/v_r12.mp3", "snd/v_r3.mp3", "snd/v_r5.mp3", "snd/v_r8.mp3", "snd/v_rw_air.mp3", "snd/v_rw_airgo.mp3", "snd/v_rw_drone.mp3", "snd/v_rw_enemyair.mp3", "snd/v_rw_enemyuav.mp3", "snd/v_rw_uav.mp3", "snd/v_win.mp3", "snd/v_yourwin.mp3", "snd/w_aa12_0.mp3", "snd/w_aa12_1.mp3", "snd/w_acido_0.mp3", "snd/w_acido_1.mp3", "snd/w_aguijon_0.mp3", "snd/w_aguijon_1.mp3", "snd/w_ak_0.mp3", "snd/w_ak_1.mp3", "snd/w_ballesta_0.mp3", "snd/w_barrett_0.mp3", "snd/w_barrett_1.mp3", "snd/w_deagle_0.mp3", "snd/w_deagle_1.mp3", "snd/w_doble_0.mp3", "snd/w_dorada_0.mp3", "snd/w_dorada_1.mp3", "snd/w_enjambre_0.mp3", "snd/w_escopeta_0.mp3", "snd/w_escopeta_1.mp3", "snd/w_granadas_0.mp3", "snd/w_hacha_0.mp3", "snd/w_hacha_1.mp3", "snd/w_katana_0.mp3", "snd/w_katana_1.mp3", "snd/w_lanzaclavos_0.mp3", "snd/w_lanzaclavos_1.mp3", "snd/w_laser_0.mp3", "snd/w_laser_1.mp3", "snd/w_llamas_0.mp3", "snd/w_llamas_1.mp3", "snd/w_m4_0.mp3", "snd/w_m4_1.mp3", "snd/w_martillo_0.mp3", "snd/w_minigun_0.mp3", "snd/w_mortero_0.mp3", "snd/w_mp5_0.mp3", "snd/w_p90_0.mp3", "snd/w_p90_1.mp3", "snd/w_pistola_0.mp3", "snd/w_pistola_1.mp3", "snd/w_plasma_0.mp3", "snd/w_plasma_1.mp3", "snd/w_puno_0.mp3", "snd/w_puno_1.mp3", "snd/w_revolver_0.mp3", "snd/w_revolver_1.mp3", "snd/w_riel_0.mp3", "snd/w_rpg_0.mp3", "snd/w_scar_0.mp3", "snd/w_scar_1.mp3", "snd/w_sierras_0.mp3", "snd/w_sniper_0.mp3", "snd/w_sniper_1.mp3", "snd/w_tesla_0.mp3", "snd/w_tesla_1.mp3", "snd/w_uzi_0.mp3", "snd/w_vector_0.mp3", "snd/w_vector_1.mp3"];

const limpia = async r => r.redirected ? new Response(await r.blob(), { status: r.status, statusText: r.statusText, headers: r.headers }) : r;

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    for (const u of CORE) {
      const r = await fetch(u, { cache: 'reload' });
      if (!r.ok) throw new Error(u + ' ' + r.status);
      await c.put(u, await limpia(r));
    }
    self.skipWaiting();
    // El resto se guarda de seis en seis y sin tumbar la instalación si alguno falla.
    const cola = REST.slice();
    const obrero = async () => {
      for (let u; (u = cola.shift());) {
        try { if (!(await c.match(u))) { const r = await fetch(u, { cache: 'no-cache' }); if (r.ok && r.status === 200) await c.put(u, await limpia(r)); } } catch (_) { }
      }
    };
    await Promise.all([1, 2, 3, 4, 5, 6].map(obrero));
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('boffbom-') && k !== V) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  const p = u.pathname;
  if (p.endsWith('.apk') || p.endsWith('/sw.js') || p.includes('/api/') || p.endsWith('/ws')) return;
  const base = new URL('./', location.href).pathname;
  if (!p.startsWith(base)) return;
  const rel = p.slice(base.length);
  if (r.mode === 'navigate' || rel === '' || rel === 'index.html') { if (rel === '' || rel === 'index.html') e.respondWith(pagina()); return; }
  e.respondWith(archivo(r, rel));
});

/* Página: red primero con 4 s de paciencia; si tarda o falla, la copia guardada. */
async function pagina() {
  const c = await caches.open(V);
  const red = fetch('index.html', { cache: 'no-store' }).then(async n => {
    if (!n.ok) throw new Error('http ' + n.status);
    const l = await limpia(n); await c.put('index.html', l.clone()); return l;
  });
  red.catch(() => { });
  const guardada = await c.match('index.html');
  if (!guardada) return red;
  try { return await Promise.race([red, new Promise((_, no) => setTimeout(no, 4000))]); } catch (_) { return guardada; }
}

/* Archivos: copia guardada primero; si falta, se baja entero, se guarda y se responde (por trozos si lo piden así). */
async function archivo(r, rel) {
  const c = await caches.open(V);
  let res = await c.match(rel);
  if (!res) {
    try {
      const n = await fetch(rel);
      if (!n.ok || n.status !== 200) return n;
      res = await limpia(n); await c.put(rel, res.clone());
    } catch (_) { return new Response('', { status: 504, statusText: 'Sin conexion' }); }
  }
  const rango = r.headers.get('range');
  if (!rango) return res;
  const m = /^bytes=(\d*)-(\d*)$/.exec(rango.trim());
  if (!m || (m[1] === '' && m[2] === '')) return res;
  const buf = await res.arrayBuffer(), tam = buf.byteLength;
  let a, b;
  if (m[1] === '') { a = Math.max(0, tam - Number(m[2])); b = tam - 1; }
  else { a = Number(m[1]); b = m[2] === '' ? tam - 1 : Math.min(Number(m[2]), tam - 1); }
  if (a > b || a >= tam) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + tam } });
  return new Response(buf.slice(a, b + 1), {
    status: 206, statusText: 'Partial Content',
    headers: { 'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg', 'Content-Range': 'bytes ' + a + '-' + b + '/' + tam, 'Content-Length': String(b - a + 1), 'Accept-Ranges': 'bytes' }
  });
}
