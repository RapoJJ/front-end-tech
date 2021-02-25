import {TestBed} from '@angular/core/testing';

import {MovieNewsService} from './movie-news.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FinnkinoNews} from '../classes/finnkino-news';
import {HttpClient, HttpEvent, HttpEventType} from '@angular/common/http';

describe('MovieNewsService', () => {
  let movieService: MovieNewsService;
  let movieNews: FinnkinoNews;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieNewsService]
  });
    movieService = TestBed.inject(MovieNewsService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  describe('getData()', () => {
    it('should return array of movie news', () => {
      movieNews = {Title: 'Test title', PublishDate: '2020-01-01', HTMLLead: 'Test Lead',
        HTMLContent: 'Test content', ImageURL: 'Test URL'};
      movieService.getData().subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(movieNews);
        }
        });

      const mockReq = httpMock.expectOne(movieService.newsSource);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('text');
      mockReq.flush(movieNews);

      httpMock.verify();

      // const movieService = TestBed.inject(MovieNewsService);
      // const http = TestBed.inject(HttpTestingController);
      // fake response
      // tslint:disable-next-line:max-line-length
      // const expectedMovieNews = [{Title: 'Tulevien elokuvien ennakkonäytöksiä Porissa, Kuopiossa ja Lappeenrannassa', PublishDate: '2021-02-18T00:00:00',
        // tslint:disable-next-line:max-line-length
        // HTMLLead: 'Vuoden 2021 tulevia ensi-iltoja on mahdollista nähdä nyt ennakkoon valituissa kaupungeissa.', HTMLContent: '<p style="text-align: center;">Uusien ennakkon&auml;yt&ouml;sten esitykset jatkuvat toivotusti Porissa, Kuopiossa ja Lappeenrannassa! Tulevalla elokuvaviikolla 19.-26.2. n&auml;hd&auml;&auml;n j&auml;lleen odotettuja n&auml;yt&ouml;ksi&auml;&nbsp;vuoden 2021 tulevista ensi-illoista. Ja valittavaa on paljon - vai mit&auml; sanot n&auml;ist&auml;:</p> <h2 style="text-align: center;">Flummelit</h2> <p style="text-align: center;"><img alt="Flummelit" src="https://media.finnkino.fi/files/movie_images/images_150/Flummelit-150.jpg" style="width: 150px; height: 214px;" /></p> <p style="text-align: center;">Kieri seikkailuun flummeleiden matkassa! Op ja Ed ovat flummeleita, ammoisilta ajoilta kotoisin olevia el&auml;imi&auml;, jotka kuuluvat luonto&auml;idin kummallisimpiin p&auml;&auml;h&auml;npistoihin: ulkon&auml;&ouml;lt&auml;&auml;n ne muistuttavat karvapeitteisi&auml; donitseja. Sattuman saattelemana villikko Op ja ep&auml;luuloinen Ed l&auml;htev&auml;t aikamatkalle kotoaan, vuoden 1835 Gal&aacute;pagossaarilta nykyp&auml;iv&auml;n suurkaupunkiin, Shanghaihin.</p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303602" role="button" style="line-height: 1.42857;" target="_blank"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> <h2 style="text-align: center;"><strong>Persian oppitunnit</strong></h2> <p style="text-align: center;"><strong><img alt="Persian oppitunnit" src="https://media.finnkino.fi/files/movie_images/images_150/PersianLessons_150.jpg" style="width: 150px; height: 214px;" /></strong></p> <p style="text-align: center;">Vuoden 1942 miehitetyss&auml; Ranskassa SS-sotilaat pid&auml;tt&auml;v&auml;t Gillesin ja l&auml;hett&auml;v&auml;t h&auml;net kohti tuhoamisleiri&auml;. Matkalla Gilles v&auml;lttyy t&auml;p&auml;r&auml;sti teloitukselta v&auml;itt&auml;m&auml;ll&auml;, ettei ole oikeasti juutalainen vaan persialainen. H&auml;t&auml;valhe pelastaa Gillesin hengen, mutta johdattaa h&auml;net pian entist&auml; pahempaan pulaan.</p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303590" role="button" style="line-height: 1.42857;" target="_blank"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> <h2 style="text-align: center;"><strong>Karalahti</strong></h2> <p style="text-align: center;"><img alt="Karalahti" src="https://media.finnkino.fi/files/movie_images/images_150/Karalahti_150.jpg" style="width: 150px; height: 214px;" /></p> <p style="text-align: center;">Karalahti-dokumentti on rehellinen kertomus kovap&auml;isest&auml; suomalaisesta selviytyj&auml;st&auml; ja kiekkoilijasta, Jere Karalahdesta, joka jakaa mielipiteit&auml;.</p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303589" role="button" target="_blank"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> <h2 style="text-align: center;"><strong>Sound of Metal</strong></h2> <p style="text-align: center;"><img alt="" src="https://media.finnkino.fi/files/movie_images/images_150/SoundOfMetal_150.jpg" style="width: 150px; height: 214px;" /></p> <p style="text-align: center;">Kuuroutuva rumpalisti Ruben aloittaa hiljaisen tutkimusmatkan omaan sisimp&auml;&auml;ns&auml; ja kipuilee rakkaudestaan musiikkiin sek&auml; kaipuustaan aikaisempaan el&auml;m&auml;&auml;ns&auml;. <a href="https://www.finnkino.fi/news/6151">Tuore Golden Globe -ehdokas.</a></p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303592" role="button" target="_blank"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> <h2 style="text-align: center;"><strong>Babyteeth</strong></h2> <p style="text-align: center;"><img alt="" src="https://media.finnkino.fi/files/movie_images/images_150/Babyteeth_150b.jpg" style="width: 150px; height: 214px;" /></p> <p style="text-align: center;">Herkk&auml; ja koskettava draama perheest&auml;, joka on sekaisin sit&auml; kohdanneesta lamaannuttavasta surusta - perheen teini-ik&auml;inen tyt&auml;r Milla on vakavasti sairas.</p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303433" role="button" target="_blank"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> <h2 style="text-align: center;"><strong>Mother</strong></h2> <p style="text-align: center;"><img alt="" src="https://media.finnkino.fi/files/movie_images/images_150/Madeo_150.jpg" style="width: 150px; height: 214px;" /></p> <p style="text-align: center;">Parasiten ohjaajan, Oscar-voittaja Bong Joon-hon parhaimpiin elokuviin lukeutuvan Motherin (2009) keski&ouml;ss&auml; on Hye-ja, 27-vuotiaan Do-joonin yksinhuoltaja&auml;iti.</p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303587" role="button" target="_blank"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> <h2 style="text-align: center;"><strong>Peruna</strong></h2> <p style="text-align: center;"><img alt="Peruna-juliste" src="https://media.finnkino.fi/files/news/Peruna_150.jpg" /></p> <p style="text-align: center;">Kotimainen komedia 1600-luvun yritt&auml;j&auml;n&ouml;rteist&auml;, jotka haluavat tuoda Suomen markkinoille eksoottisen maap&auml;&auml;ryn&auml;n &ndash; eli perunan.</p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303509" role="button"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> <h2 style="text-align: center;"><strong>Tunturin tarina</strong></h2> <p style="text-align: center;"><img alt="Tunturin tarina -juliste" src="https://media.finnkino.fi/files/news/TunturinTarina_150.jpg" /></p> <p style="text-align: center;">Tunturin tarina vie katsojat l&auml;pi Lapin er&auml;maiden, aina Pohjoiselle j&auml;&auml;merelle asti, miss&auml; tunturit laskeutuvat meren syleilyyn. Se on myyttinen kertomus, jonka tarina alkaa miljardien vuosien takaa.</p> <p style="text-align: center;"><a class="btn btn-primary" href="https://www.finnkino.fi/event/303544" role="button"><span style="color:#000000;"><strong>Osta liput</strong></span></a></p> ', ImageURL: 'http://media.finnkino.fi/1012/news/6140/ennakot_444.jpg'}];

     // let actualMovieNews = [];

     // movieService.getData().subscribe((news: Array<FinnkinoNews>) => {
       // actualMovieNews = news;
      // });

      // http.expectOne('https://www.finnkino.fi/xml/News/').flush(expectedMovieNews);

     // expect(actualMovieNews).toEqual(expectedMovieNews);
    });
  });
});


