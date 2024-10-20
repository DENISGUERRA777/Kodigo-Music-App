import { ArtistCard } from "./ArtistCard"
import {FilaCard} from "./FilaComponent"
import { GenericCard } from "./GenericCard"

export const Carrusel = () => {
    return (
        
        <main className="reproductor-container">
            <FilaCard lista='Artistas populares'>
                <ArtistCard 
                imagen='https://s2.abcstatics.com/media/cultura/2019/01/05/bunny2-kQKG--1248x698@abc.jpg'
                artista='Bad Bunny'
                alternativo='bad-bunny'
                />
                <ArtistCard
                    imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFdVXHbZoKbwkMo3HR6aK1ZvDmGAB4sx07A&s'
                    artista='Karol G'
                    alternativo='karol-g'
                />
                 <ArtistCard
                    imagen='https://i0.wp.com/holanews.com/wp-content/uploads/2023/01/rss-efec531f8cb32600dc29831d112343eb5cd88913e28w.jpg?fit=1920%2C1280&ssl=1'
                    artista='Feid'
                    alternativo='feid'
                />
                 <ArtistCard
                    imagen='https://media.vogue.mx/photos/645054948ac66e655c9eafa5/1:1/w_2000,h_2000,c_limit/maluma-en-met-gala-2023.jpg'
                    artista='Maluma'
                    alternativo='maluma'
                />
                 <ArtistCard
                    imagen='https://i.scdn.co/image/ab6761610000e5ebafdf17286a0d7a23ad388587'
                    artista='Arcangel'
                    alternativo='arcangel'
                />
            </FilaCard>
            <FilaCard lista='Albumes populares'>
                <GenericCard 
                imagen='https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72'
                artista='Bad Bunny'
                alternativo='album-verano-sin-ti-bad-bunny'
                infografia='Un verano sin ti'
                />
                <GenericCard
                    imagen='https://i.scdn.co/image/ab67616d0000b2737b1fc51ff3257b5286a1ecec'
                    artista='Bad Bunny'
                    alternativo='nadie-sabe-lo-q-pasara-mañana-album'
                    infografia='Nadie sabe lo que parara mañana'
                />
                 <GenericCard
                    imagen='https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242'
                    artista='Feid'
                    alternativo='ferxxocalipsis-album-feid'
                    infografia='Ferxxocalipsis'
                />
                 <GenericCard
                    imagen='https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4'
                    artista='Tainy'
                    alternativo='data-album-tainy'
                    infografia='Data'
                />
                 <GenericCard
                    imagen='https://i.scdn.co/image/ab67616d0000b27382ce4c7bbf861185252e82ae'
                    artista='Grupo Frontera'
                    alternativo='el-comienzo-album'
                    infografia='El comienzo'
                />
            </FilaCard>
            <FilaCard lista='Listas de reproduccion'>
                <GenericCard 
                imagen='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg'
                infografia='tu actualizacion diaria de tus canciones preferidas'
                alternativo='lista-de-reproduccion-global'
                />
                <GenericCard
                    imagen='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg'
                    infografia='tu actualizacion diaria de tus canciones preferidas'
                    alternativo='lista-de-reproduccion-usa'
                />
                 <GenericCard
                    imagen='https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg'
                    infografia='tu actualizacion diaria de tus canciones preferidas'
                    alternativo='lista-de-reproduccion-viral-global'
                />
                 <GenericCard
                    imagen='https://charts-images.scdn.co/assets/locale_en/viral/daily/region_us_default.jpg'
                    infografia='tu actualizacion diaria de tus canciones preferidas'
                    alternativo='lista-de-reproduccion-viral-usa'
                />
                 <GenericCard
                    imagen='https://charts-images.scdn.co/assets/locale_en/viral/daily/region_us_default.jpg'
                    infografia='tu actualizacion diaria de tus canciones preferidas'
                    alternativo='lista-de-reproduccion-viral-usa'
                />
            </FilaCard>
            
        </main>
        
    )
}