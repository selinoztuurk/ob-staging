import i18n from 'common/i18n/i18n';

import styles from 'modules/privacy-policy/styles.module.scss';

const PrivacyPolicy = (): JSX.Element => {
  return (
    <>
      <div className="page-title-container">
        <h1 className={`page-title`}>{i18n.t('privacyPolicy_title')}</h1>
      </div>
      <div
        className={`${styles['privacy-policy-page-container']} page-container`}
      >
        <div className={styles.paragraph}>
          Kişisel verilerin korunması, Öğrenci Baksana için önemli bir konudur.
          Öğrenci Baksana, 6698 Sayılı Kişisel Verilerin Korunması Kanunu’na
          (“KVK Kanunu”) uyum sağlanması için KVK Kanunu’nun öngördüğü ilkeleri
          benimsemekte olup kişisel verilerin işlenmesi, silinmesi, yok
          edilmesi, anonim hale getirilmesi, aktarılması, ilgili kişinin
          aydınlatılması ve ilgili kişiye ait veri güvenliğinin sağlanmasıyla
          ilgili yükümlülüklerini yerine getirmektedir. Bu kapsamda, düzenlenen
          Gizlilik ve Kişisel Verilerin Korunması Politikası, kişisel verisi
          işlenen gerçek kişilerin (“İlgili Kişi”) erişimine sunulmaktadır.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            1-Gizlilik ve Kişisel Verilerin Korunması Politikasının Kapsam ve
            Amacı
          </div>
        </div>
        <div className={styles.paragraph}>
          İşbu Gizlilik ve Kişisel Verilerin Korunması Politikası, Öğrenci
          Baksana’nın;
          <ul>
            <li>
              Kişisel verileri toplama yöntemlerini ve hukuki sebeplerini,
            </li>
            <li>
              Hangi kişi gruplarının kişisel verilerinin işlendiğini (Veri
              Sahibi Kategorizasyonu),
            </li>
            <li>
              Bu kişi gruplarına ilişkin olarak hangi kategoride kişisel veri
              işlendiğini (Veri Kategorileri) ve örnek veri türleri,
            </li>
            <li>
              Bu kişisel verilerin hangi iş süreçlerinde ve hangi amaçlarla
              kullanıldığını,
            </li>
            <li>
              Kişisel verilerin güvenliğini sağlamak amacıyla alınan teknik ve
              idari tedbirleri,
            </li>
            <li>
              Kişisel verilerin kimlere ve hangi amaçla aktarılabileceğini,
            </li>
            <li>Kişisel verileri saklama sürelerini,</li>
            <li>
              İlgili Kişiler’in kişisel verileri üzerindeki haklarının neler
              olduğunu ve bu hakları nasıl kullanabileceklerini,
            </li>
            <li>
              İlgili Kişiler’in elektronik ticari ileti alma konusundaki olumlu
              veya olumsuz tercihlerini nasıl değiştirebileceklerini,
            </li>
            <li>Resmi makamlarla kişisel veri paylaşımını açıklamaktadır.</li>
          </ul>
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            a. Kişisel Verileri Toplama Yöntemleri ve Hukuki Sebepleri
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, kişisel verileri, Öğrenci Baksana websitesi , mobil
          uygulamaları, mobil websitesi, akıllı TV uygulaması, cihaz/işletim
          sistemleri, matbuu form, İlgili Kişi’nin kendisi, üçüncü taraf
          yazılımlar, sözleşme, kartvizit, sosyal medya hesapları, çerezler,
          çağrı merkezi, e-posta ve sair iletişim kanalları aracılığıyla,
          işitsel, elektronik veya yazılı olarak, KVK Kanunu’nda belirtilen
          kişisel veri işleme şartlarına uygun olarak ve işbu Gizlilik ve
          Kişisel Verilerin Korunması Politikası’nda belirtilen hukuki sebepler
          doğrultusunda toplamaktadır.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            b. Veri Konusu Kişi Grubu Kategorizasyonu
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, kişisel veri işleme süreçlerinde ve bu süreçlere
          bağlı faaliyetlerde, kişisel verileri işlenen veri konusu kişi
          gruplarını aşağıdaki şekilde kategorize etmektedir.
          <ul>
            <li>Üye</li>
            <li>Kullanıcı</li>
            <li>Reklam Veren / Ajans Verisi</li>
            <li>Tedarikçi ve Tedarikçi çalışanı</li>
            <li>İletişime geçen kişi verisi</li>
          </ul>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            c. Kişisel Verilerin Hangi İş Süreçlerinde ve Hangi Amaçlarla
            Kullanıldığı
          </div>
        </div>
        <div className={styles.paragraph}>
          Kişisel veriler, Öğrenci Baksana tarafından;
        </div>
        <ul>
          <li>
            Üye / Kullanıcılar ’ın trafik bilgilerinin (IP adresi, verilen
            hizmetin başlama ve bitiş tarihi, yararlanılan hizmetin türü,
            aktarılan veri miktarı ve abone kimlik bilgileri) ilgili mevzuat
            uyarınca işlenmesi,
          </li>
          <li>Üyelik işlemlerinin gerçekleştirilmesi,</li>
          <li>
            Sunulan hizmetlerin/içeriklerin iyileştirilmesi, yeni
            hizmetlerin/içeriklerin geliştirilmesi ve ticari elektronik ileti
            onayı mevcut olan Üyeler’e bununla ilgili bilgilendirme yapılması,
          </li>
          <li>
            Üyelik Sözleşmesinin ifası amacıyla, ticari elektronik ileti onayı
            mevcut olan Üyeler açısından, Üye’nin tercih ve beğenilerinin analiz
            edilmesi ve Üye’ye özel hizmet/içerik önerilmesi,
          </li>
          <li>
            Üye/ Kullanıcı deneyimini ve hizmet/içerik kalitesini arttırmak
            için, Üye/Kullanıcı hareketlerinin takip edilmesi,
          </li>
          <li>
            Üye / Kullanıcılar için, çerez politikasında yer alan bilgiler
            doğrultusunda, doğrudan pazarlama, dijital pazarlama, yeniden
            pazarlama, hedefleme, profilleme ve analiz yapılarak Üye / Kullanıcı
            ’nın tercih ve beğenisi doğrultusunda uygulama, ürün ve hizmetlerin
            tanıtımının ve pazarlamasının yapılması,
          </li>
          <li>Üye / Kullanıcı sorun ve şikayetlerinin çözümlenmesi,</li>
          <li>
            Websitesi, mobil uygulama, mobil websitesi ve akıllı TV
            uygulamasında Üye / Kullanıcı deneyiminin iyileştirilmesi,
          </li>
          <li>
            Üye / Kullanıcı memnuniyeti, sadakati ve bağlılığının yaratılması,
          </li>
          <li>
            İstatistiksel değerlendirmeler ve pazar araştırmaları yapılması,
          </li>
          <li>Kurumsal itibar yönetimi ve medya iletişiminin yürütülmesi,</li>
          <li>
            Öğrenci Baksana’nın ticari ve iş stratejilerinin belirlenmesi ve
            uygulanması,
          </li>
          <li>Muhasebe ve satın alma işlemlerinin takibi,</li>
          <li>Hukuki süreçlerin yürütülmesi ve mevzuata uyumun sağlanması,</li>
          <li>
            İdari ve adli makamlardan gelen bilgi taleplerinin
            cevaplandırılması,
          </li>
          <li>
            Uygulama içi raporlama ve iş geliştirme faaliyetlerinin planlanması,
          </li>
          <li>
            Bilgi ve işlem güvenliği sağlanması ve kötü amaçlı kullanımın
            önlenmesi,
          </li>
        </ul>
        <div className={styles.paragraph}>
          - Öğrenci Baksana’nın faaliyetlerinin, Öğrenci Baksana prosedürleri ve
          KVK Kanunu kapsamında hazırlanan politikalarına uygun olarak
          yürütülmesi süreçlerine ilişkin faaliyetleri gerçekleştirmek amacıyla
          kullanılmaktadır.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            d. Kişisel Verilerin Güvenliğini Sağlamak Amacıyla Alınan Teknik ve
            İdari Tedbirler
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, kişisel verilerinizin gizliliği, bütünlüğü ve
          güvenliğinin sağlanması için gerekli teknik ve idari her türlü tedbiri
          almayı ve gerekli özeni göstermeyi taahhüt etmektedir. Öğrenci
          Baksana, kişisel verilere yetkisiz erişilmesini, kişisel verilerin
          hatalı kullanımını, hukuka aykırı olarak işlenmesini, ifşa edilmesini,
          değiştirilmesini veya imha edilmesini engellemek için gerekli
          önlemleri almaktadır. Öğrenci Baksana, kişisel verileri işlerken
          güvenlik duvarları ve genel kabul görmüş güvenlik teknolojisi
          standartlarını kullanmaktadır. Öğrenci Baksana, işlediği kişisel
          verilere hukuka aykırı erişimin engellenmesi, bu verilerin hukuka
          aykırı işlenmesinin önlenmesi ve kişisel verilerin muhafazasının
          sağlanmasına ilişkin olarak:
        </div>
        <div className={styles.paragraph}>
          Kişisel verilerin alındığı web sitesi, mobil uygulama, mobil websitesi
          ve akıllı TV uygulamasındaki tüm alanlar SSL ile korur,
        </div>
        <div className={styles.paragraph}>
          Web sitesi, mobil uygulama, mobil websitesi ve akıllı TV
          uygulamasından toplanan kişisel verilerin hukuka aykırı olarak
          işlenmemesi için, çalışanlarına yönelik erişim yetki ve kontrol
          matrisleri oluşturur ve uygulamaya alır,
        </div>
        <div className={styles.paragraph}>
          Kişisel verilere hukuka aykırı olarak erişilmemesini sağlamak üzere;
          periyodik olarak sızma testleri yaptırır, sistemin yetkisiz erişimlere
          dayanıklılığını test eder,
        </div>
        <div className={styles.paragraph}>
          Kağıt ortamdaki kişisel verilerin mutlaka kilitli dolaplarda muhafaza
          edilmesini ve sadece yetkili kişiler tarafından erişilmesini sağlar,
        </div>
        <div className={styles.paragraph}>
          Hizmet alınan üçüncü taraflara ait çerezler aracılığıyla işlenen
          kişisel veriler, Üyelik sona erdiği takdirde üçüncü taraflara ait
          sistemlerden silinmektedir.
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana’nın gerekli bilgi güvenliği önlemlerini almasına
          karşın, Öğrenci Baksana tarafından işletilen platformlara veya Öğrenci
          Baksana sistemine yapılan saldırılar sonucunda kişisel verilerin zarar
          görmesi veya yetkisiz üçüncü kişilerin eline geçmesi durumunda,
          Öğrenci Baksana bu durumu derhal sizlere ve Kişisel Verileri Koruma
          Kurulu’na bildirir ve gerekli önlemleri alır.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            e. Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, kişisel verileri yalnızca işbu Gizlilik ve Kişisel
          Verilerin Korunması Politikası’nda belirtilen amaçlar doğrultusunda ve
          KVK Kanunu’nun 8. ve 9. maddelerine uygun olarak üçüncü kişilere
          aktarmaktadır. Bu kapsamda işlenen Üye / Kullanıcı verileri, web
          sitesi, mobil uygulama, mobil websitesi ve akıllı TV uygulaması
          kullanım tercihleri ve gezinti geçmişi, segmentasyon yapılması ve Üye
          / Kullanıcı beğeni ve tercihleri doğrultusunda Üye / Kullanıcı’yla
          iletişime geçilmesi amacıyla, e-posta gönderim hizmeti veren şirketler
          ile paylaşılmaktadır. Bu kapsamda gerçekleştirilen kişisel veri
          aktarımları, ilgili üçüncü tarafın sunduğu güvenli ortam ve kanallar
          aracılığıyla gerçekleşmektedir.{' '}
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          Müşteri memnuniyetinin ve bağlılığının artırılması amacıyla, Üye /
          Kullanıcı’ya ait anonim veriler pazar araştırması yapacak şirketlerle
          paylaşılmaktadır.
        </div>
        <div className={styles.paragraph}>
          Raporlama ve istatistiki çalışmalar kapsamında, Üye / Kullanıcı’ya ait
          veriler, Öğrenci Baksana’nın hissedarları olan Orkun ALKAN ve Ulaş
          ÖZMEKİK ile paylaşılmaktadır.
        </div>
        <div className={styles.paragraph}>
          Yukarıda belirttiğimiz yurt içi ve yurt dışı aktarıma konu kişisel
          veriler, güvenliklerini sağlayacak teknik tedbirlerin yanı sıra;
        </div>
        <div className={styles.paragraph}>
          Hukuki ilişkinin karşı tarafının veri sorumlusu veya veri işleyen
          olması dikkate alınarak sözleşmelerimizde yer verilen KVK Kanunu
          uyumlu hükümler sayesinde hukuksal olarak da korunmaktadır.
        </div>
        <div className={styles.paragraph}>
          Yurtdışına kişisel veri aktarımı yapılan hallerde, KVK Kurumu
          tarafından yayınlanmış olan model sözleşme klozları sözleşmenin karşı
          tarafına imza ettirilmektedir.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            f. Kişisel Verileri Saklama Süreleri
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, işlediği kişisel verileri, ilgili mevzuatta öngörülen
          veya işleme amacının gerektirdiği süreler boyunca KVK Kanunu ile
          uyumlu olarak muhafaza eder. Kişisel Veri Saklama ve İmha Politikamıza
          göre bu süreler yaklaşık olarak aşağıdaki gibidir:
          <div className={styles.paragraph}>
            <br />
          </div>
          <ul>
            <li>Üyeliğe ilişkin kayıtlar: 10 yıl, 6098 Sayılı Kanun</li>
            <li>
              Muhasebe ve finansal işlemlere ilişkin tüm kayıtlar: 10 yıl, 6102
              Sayılı Kanun, 213 Sayılı Kanun
            </li>
            <li>
              Ticari elektronik ileti onay kayıtları: Onayın geri alındığı
              tarihten itibaren 3 yıl, 6563 Sayılı Kanun ve ilgili ikincil
              mevzuat
            </li>
            <li>
              Üye/Kullanıcı’ya ilişkin trafik bilgileri: 2 yıl, 5651 Sayılı
              Kanun
            </li>
            <li>
              Reklam veren / Ajans: Hukuki ilişki sona erdikten sonra 10 yıl,
              6102 Sayılı Kanun, 6098 Sayılı Kanun, 213 Sayılı Kanun
            </li>
            <li>
              Tedarikçilere ilişkin kişisel veriler: Hukuki ilişki sona erdikten
              sonra 10 yıl, 6102 Sayılı Kanun, 6098 Sayılı Kanun ve 213 Sayılı
              Kanun
            </li>
          </ul>
        </div>

        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          İletişime geçen kişi verisi şikayet çözüldükten sonra silinmektedir.
        </div>
        <div className={styles.paragraph}>
          Çerezlerle elde ettiğimiz kişisel verilerin saklama süreleri konusunda
          Çerez (Cookie) Politikamızı inceleyebilirsiniz.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>g. Profilleme</div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana Üye/Kullanıcı’ya ilişkin olarak işlediği kişisel
          verileri kullanarak profilleme yapmaktadır. Profilleme ile ilgili
          detaylı bilgi için Çerez (Cookie) Politikamızı inceleyebilirsiniz.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            h.İlgili Kişiler’in Kişisel Verileri Üzerindeki Haklarının Neler
            Olduğunu ve Bu Hakları Nasıl Kullanabilecekleri
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana tarafından işlenen kişisel veriler üzerinde İlgili
          Kişi’nin KVK Kanunu madde 11 uyarınca sahip olduğu haklar aşağıda
          sıralanmaktadır:
        </div>
        <div className={styles.paragraph}>
          Kişisel veri işlenip işlenmediğini öğrenme,
        </div>
        <div className={styles.paragraph}>
          Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
        </div>
        <div className={styles.paragraph}>
          Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp
          kullanılmadığını öğrenme,
        </div>
        <div className={styles.paragraph}>
          Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü
          kişileri bilme,
        </div>
        <div className={styles.paragraph}>
          Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların
          düzeltilmesini isteme,
        </div>
        <div className={styles.paragraph}>
          KVK Kanunu 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin
          silinmesini veya yok edilmesini isteme,
        </div>
        <div className={styles.paragraph}>
          (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin
          aktarıldığı üçüncü kişilere bildirilmesini isteme,
        </div>
        <div className={styles.paragraph}>
          İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
          edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
          çıkmasına itiraz etme,
        </div>
        <div className={styles.paragraph}>
          Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara
          uğraması hâlinde zararın giderilmesini talep etme.
        </div>
        <div className={styles.paragraph}>
          Üyelerimiz, Öğrenci Baksana websitesi, mobil uygulaması, mobil
          websitesi ve akıllı TV uygulaması içindeki “Hesabım” bölümünden
          hesaplarına erişebilir ve gerekli değişiklik, güncelleme ve/veya silme
          gibi işlemleri yapabilirler.
        </div>
        <div className={styles.paragraph}>
          Kullanıcı/Üye, bu kapsamdaki haklarını KVKK md. 13/f.1 uyarınca:
        </div>
        <div className={styles.paragraph}>
          •destek@ogrencibaksana.comisimli e-posta adresine, Kullanıcı/Üye’ye
          ait güvenli elektronik imza ile imzalanmış bir e-posta göndermek(aynı
          zamanda uygulamamıza hitaben yazılan “word veya pdf.” formatındaki bir
          dosya da güvenli e-imza ile imzalanarak gönderilebilir)
        </div>
        <div className={styles.paragraph}>
          • Uygulamamızın kayıtlı e-posta adresine, Kullanıcı/Üye’ye ait güvenli
          elektronik imza ile imzalanmış bir e-posta göndermek
        </div>
        <div className={styles.paragraph}>
          • Kimlik tespitinin noterde yapıldığı bir dilekçeyi Öğrenci
          Baksana’nın web sayfasında yer alan adres bilgilerine göndermek
          suretiyle tarafımıza başvuru yaparak, taleplerini iletebilir.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            i. İlgili Kişiler’in Elektronik Ticari İleti Alma Konusundaki Olumlu
            Veya Olumsuz Tercihlerini Nasıl Değiştirebilecekleri
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana web sitesi, mobil uygulaması, mobil websitesi ve
          akıllı TV uygulamasına üye olurken veya daha sonraki bir zamanda
          vermiş olduğunuz ticari elektronik ileti alma konusundaki olumlu veya
          olumsuz tercihlerinizi dilediğiniz zaman;
        </div>
        <div className={styles.paragraph}>
          “Hesabım” bölümüne erişerek değiştirebilir veya güncelleyebilirsiniz,
          veyaGöndermiş olduğumuz e-postalarda yer alan çıkış linkini
          tıklayabilirsiniz.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            j. Resmi Makamlarla Kişisel Veri Paylaşımı
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, Öğrenci Baksana web sitesine, mobil uygulamalara,
          mobil websitesine ve akıllı TV uygulamasına yaptığınız ziyaret veya
          Üyeliğe ilişkin kişisel verilerinizi ve gezinme bilgileriniz gibi
          trafik bilgilerinizi; Öğrenci Baksana’nın yasalar karşısındaki
          yükümlülüğünü ifa etmesi amacıyla (suçla mücadele, devlet ve kamu
          güvenliğinin tehdidi ve benzeri ancak bununla sınırlı olmamak üzere
          Öğrenci Baksana’nın yasal veya idari olarak bildirim veya bilgi verme
          yükümlülüğünün mevcut olduğu durumlarda) yasal olarak bu bilgileri
          talep etmeye yetkili olan kamu kurum ve kuruluşları ile
          paylaşabilecektir.
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            l. Çerez (Cookie) Kullanımı ve Yönetimi
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana tarafında kullanılan çerezler, çerez çeşitleri,
          amaçları, saklama süreleri, profilleme ve çerez yönetimi ile ilgili
          detaylı bilgi için Çerez (Cookie) Politikamızı inceleyebilirsiniz.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            2. Kişisel Verilerin Silinmesi, Yok Edilmesi ve Anonimleştirilmesi
            Şartları
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, web sitesi, mobil uygulaması, mobil websitesi ve
          akıllı TV uygulaması aracılığıyla işlediği kişisel verileri, KVK
          Kanunu madde 7, 17 ve Türk Ceza Kanunu madde 138 uyarınca, ilgili
          kanunların öngördüğü süreler ve/veya işleme amacının gerekli kıldığı
          süreler boyunca saklamaktadır. Bu sürelerin sona ermesi durumunda ise,
          Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi
          Hakkında Yönetmelik hükümleri uyarınca silecek, yok edecek veya anonim
          hale getirecektir.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana tarafından kişisel verilerin silinmesi, kişisel
          verilerin ilgili kullanıcılar için hiçbir şekilde erişilemez ve tekrar
          kullanılamaz hale getirilmesi işlemini ifade etmektedir. Öğrenci
          Baksana bunun için kullanıcı seviyesinde erişim yetki ve kontrol
          matrisi oluşturur ve uygulamaya alır. Veri tabanında silme işleminin
          gerçekleştirilmesi için gerekli tedbirleri alır.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana tarafından kişisel verilerin yok edilmesi, kişisel
          verilerin hiç kimse tarafından hiçbir şekilde erişilemez, geri
          getirilemez ve tekrar kullanılamaz hale getirilmesi işlemini ifade
          etmektedir.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana tarafından kişisel verilerin anonim hale getirilmesi,
          kişisel verilerin başka verilerle eşleştirilse dahi hiçbir surette
          kimliği belirli veya belirlenebilir bir gerçek kişiyle
          ilişkilendirilemeyecek hale getirilmesini ifade etmektedir.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim
          Hale Getirilmesi Hakkında Yönetmelik uyarınca hazırladığı Kişisel
          Verilerin Saklanması ve İmhası Politikası kapsamında silme, yok etme
          ve anonim hale getirmeye ilişkin yöntemleri ve aldığı teknik ve idari
          tedbirleri ayrıntılı olarak açıklamaktadır.
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          <br />
        </div>
        <div className={styles.paragraph}>
          <div className={styles.bold}>
            3. Gizlilik ve Kişisel Verilerin Korunması Politikası’nda Yapılacak
            Değişiklikler
          </div>
        </div>
        <div className={styles.paragraph}>
          Öğrenci Baksana, işbu Gizlilik ve Kişisel Verilerin Korunması
          Politikası’nda her zaman değişiklik yapabilir. Bu değişiklikler,
          değiştirilmiş yeni Gizlilik ve Kişisel Verilerin Korunması
          Politikası’nın yayınlanmasıyla birlikte derhal geçerlilik kazanır.
          İşbu Gizlilik ve Kişisel Verilerin Korunması Politikası’ndaki
          değişikliklerden haberdar olmanız için, Üyelerimize e-posta yoluyla
          gerekli bilgilendirme yapılacaktır. Ayrıca hem kullanıcı hem de
          üyelerimize ogrencibaksana.com sayfasında da bu güncellemelere ilişkin
          bilgi verilecektir.
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
