import { RugItem, RoomPreset, BranchInfo } from '../types';

// Assets imported directly for Vite bundling
import heroImage from '../assets/images/hero_luxury_carpet_1788980841329.jpg';
import herekeImage from '../assets/images/hereke_silk_carpet_1788980858892.jpg';
import konyaImage from '../assets/images/konya_wool_rug_1788980874038.jpg';
import kayseriImage from '../assets/images/kayseri_luxury_rug_1788980887990.jpg';
import emblemImage from '../assets/images/asas_fakhama_calligraphy_logo_1788983160735.jpg';

export { heroImage, emblemImage };

export const RUGS_COLLECTION: RugItem[] = [
  {
    id: 'hereke-imperial-silk',
    name: 'Imperial Hereke Pure Silk Masterpiece',
    arabicName: 'سجادة هيريكي حرير إمبراطوري فاخر',
    category: 'hereke',
    origin: 'Hereke, Turkey',
    originArabic: 'هيريكي، تركيا (ورش القصور العثمانية التاريخية)',
    material: '100% Pure Natural Bursa Silk with Gilded Thread',
    materialArabic: 'حرير طبيعي خالص 100% من بورصة مع حواف مطعمة بخيوط برونزية وذهبية',
    knotDensity: '1,000,000+ عقدة / م²',
    dimensions: ['2.0 × 3.0 م', '2.5 × 3.5 م', '3.0 × 4.0 م', 'مقاسات خاصة عند الطلب'],
    thickness: '4 - 5 ملم (دقة حريرية فائقة)',
    featured: true,
    image: herekeImage,
    description: 'تحفة هيريكي النادرة تعتبر تاج صناعة السجاد العالمي. منسوجة يدوياً بالكامل بعقدة Gördes التركية المزدوجة على سدى حريري ناعم، تعكس الضوء بزوايا حريرية ساحرة وتزيد رونقاً مع مرور السنين.',
    historySnippet: 'أنشأ السلطان عبد المجيد الأول أنوال هيريكي الملكية عام 1843 لنسج السجاد الحصري لقصور السلاطين وسفارات الإمبراطورية العثمانية حول العالم. لا تُباع قطعة هيريكي أصلية دون توثيق العقد الملكي.',
    colors: ['#1E324D', '#C28B6D', '#2B4463', '#F4EDE2'],
    idealFor: 'المجالس الرسمية الكبرى، صالات استقبال كبار الضيوف، والقصور',
    features: [
      'كثافة استثنائية تفوق مليون عقدة في المتر المربع',
      'حرير طبيعي عالي اللمعان يتغير تموجه اللوني مع زاوية الإضاءة',
      'شهادة توثيق ومنشأ معتمدة من مصانع هيريكي التراثية',
      'مقاومة فائقة للكهرباء الساكنة وسهولة العناية الاحترافية'
    ],
    inStock: true,
    warranty: 'ضمان أصالة وتوثيق رسمي مدى الحياة'
  },
  {
    id: 'konya-tribal-runner',
    name: 'Antique Anatolian Konya Pure Wool Rug',
    arabicName: 'سجادة قونية التراثية صوف جبلي خالص',
    category: 'konya',
    origin: 'Konya, Central Anatolia',
    originArabic: 'قونية، وسط الأناضول (مهد السجاد السلجوقي الأول)',
    material: '100% Hand-Spun Highland Wool with Plant Dyes',
    materialArabic: 'صوف أنادولي جبلي مغزول يدوياً 100% بأصباغ نباتية طبيعية',
    knotDensity: '280,000 عقدة / م²',
    dimensions: ['1.8 × 2.8 م', '2.0 × 3.0 م', '1.0 × 4.0 م (ممر/رنر)', 'تفصيل حسب المساحة'],
    thickness: '9 - 11 ملم (ملمس وثيق وعزل حراري فاخر)',
    featured: true,
    image: konyaImage,
    description: 'قطعة فنية أصيلة تمثل عراقة قونية التاريخية. نقوش هندسية دقيقة تحاكي رموز البركة والوفرة في التراث الأناضولي، مصبوغة بجذور نبات الفُوّة الأحمر وقشور الجوز وأوراق النيلة الزرقاء.',
    historySnippet: 'سجاد قونية يعود لجذور الدولة السلجوقية في القرن الثالث عشر؛ واحتفى به الرحالة ابن بطوطة وماركو بولو كأمتن وأجود سجاد مشرق في العالم القديم بفضل ألوانه الطبيعية المستقرة لقرون.',
    colors: ['#A02C1F', '#1E3A5F', '#D99B26', '#2D2825'],
    idealFor: 'المجالس الحيوية اليومية، الممرات الملكية، وبيوت الشعر والمنازل التراثية الفخمة',
    features: [
      'صوف بري طبيعي غني بلانولين الصوف العازل للبقع',
      'أصباغ نباتية طبيعية لا تبهت ولا تفرز روائح كيميائية',
      'متانة فائقة تتحمل الأقدام والاستخدام العائلي المكثف',
      'نقوش تمائم تراثية تضفي دفئاً شرقياً فريداً'
    ],
    inStock: true,
    warranty: 'ضمان ثبات الألوان ومتانة الصوف 15 عاماً'
  },
  {
    id: 'kayseri-silk-wool-arabesque',
    name: 'Royal Kayseri Arabesque Silk & Wool Rug',
    arabicName: 'سجادة قيصري الملكية حرير وصوف إسليمي',
    category: 'kayseri',
    origin: 'Kayseri, Turkey',
    originArabic: 'قيصري، تركيا (أسفل جبل أرجييس)',
    material: 'Fine Lambswool & Natural Silk on Pure Cotton Foundation',
    materialArabic: 'صوف ناعم مدعم بلمسات حريرية على قاعدة سدى قطنية مشدودة',
    knotDensity: '650,000 عقدة / م²',
    dimensions: ['2.0 × 3.0 م', '2.5 × 3.5 م', '3.0 × 4.0 م', 'مقاسات دائرية ومربعة'],
    thickness: '6 - 7 ملم',
    featured: true,
    image: kayseriImage,
    description: 'توازن ساحر بين فخامة الحرير وقوة تحمل الصوف الفاخر. تشتهر بتفاصيل الأزهار الإسليمية الدائرية (الميدالية المركزية) وزخارف اللوتس المستوحاة من حدائق سلاطين آل عثمان.',
    historySnippet: 'تعد قيصري عاصمة الحرف اليدوية الأناضولية لأكثر من 800 عام. تبرع نساجات قيصري في إبراز حدود الزهور بخيوط الحرير اللامع فوق أرضية الصوف غير اللامع مما يمنح تأثيراً ثلاثي الأبعاد (3D Depth).',
    colors: ['#F5EBE1', '#2C4058', '#C49746', '#708B75'],
    idealFor: 'صالات المعيشة الفخمة، غرف الطعام الدبلوماسية، والفلل الحديثة',
    features: [
      'تأثير ثلاثي الأبعاد لنقوش الأزهار بفضل التباين الحريري/الصوفي',
      'سدى قطني مشدود يمنع اعوجاج السجادة أو انكماشها تماماً',
      'ألوان راقية تنسجم مع الأثاث المودرن والنيوكلاسيك',
      'كثافة عقد عالية تضمن دقة التفاصيل المتناهية في الصغر'
    ],
    inStock: true,
    warranty: 'ضمان أصالة معتمد ومطابقة للمعايير'
  },
  {
    id: 'ushak-palace-grand',
    name: 'Antique Oushak Medallion Palace Rug',
    arabicName: 'سجادة أوشاك قصر السلطان نيوكلاسيك',
    category: 'ushak',
    origin: 'Uşak, Aegean Turkey',
    originArabic: 'أوشاك، منطقة إيجه، غرب تركيا',
    material: 'Velvety Silky Angora Wool',
    materialArabic: 'صوف أنغورا الحريري ذو الملمس المخملي الفائق',
    knotDensity: '350,000 عقدة / م²',
    dimensions: ['2.5 × 3.5 م', '3.0 × 4.5 م', '4.0 × 6.0 م للمساحات الكبرى'],
    thickness: '8 ملم',
    featured: false,
    image: heroImage,
    description: 'سجاد أوشاك هو المفضل لدى مهندسي الديكور العالميين ومصممي القصور. يمتاز بنقوشه الكبيرة الهادئة وألوان التراكوتا والمريمية الهادئة التي تعطي إحساساً بالاتساع والهدوء الأرستقراطي.',
    historySnippet: 'سجاد أوشاك التاريخي رسمه أعظم فناني عصر النهضة الأوروبي في لوحات المتاحف مثل هولباين ولوتو، وكان يُقدم كهدايا دبلوماسية ثمينة لملوك أوروبا وفرنسا وإنجلترا.',
    colors: ['#D6C2A5', '#B86B52', '#869485', '#EFE9DE'],
    idealFor: 'الصالات المفتوحة والمجالس النيوكلاسيكية والمكاتب الفارهة',
    features: [
      'نقوش زهرية واسعة تعطي وسعاً بصرياً للغرفة',
      'ملمس مخملي ناعم جداً تحت الأقدام',
      'توافق استثنائي مع الرخام الإيطالي وألوان البيج والرمادي الملكي'
    ],
    inStock: true,
    warranty: 'ضمان خلو من العيوب المصنعية وجودة النسيج'
  },
  {
    id: 'luxury-palace-moquette',
    name: 'Royal High-Density Moquette & Wall-to-Wall Carpeting',
    arabicName: 'موكيت أساس الفخامة الملكي للمجالس والقصور والفنادق',
    category: 'moquette',
    origin: 'Gaziantep & Istanbul, Turkey',
    originArabic: 'غازي عنتاب وإسطنبول، تركيا',
    material: 'Ultra-Dense Heatset Polyamide & New Zealand Wool Blend',
    materialArabic: 'ألياف الصوف النيوزيلندي والبولي أميد المعالج حرارياً عالي الكثافة (Heatset)',
    knotDensity: '1,200,000 نقطة نسج / م²',
    dimensions: ['رولات بعرض 4 أمتار', 'تفصيل وتركيب دقيق للمساحات الكبرى والسلالم'],
    thickness: '12 - 14 ملم (تبطين عازل للصوت وراحة مشي ملكية)',
    featured: true,
    image: heroImage,
    description: 'تشكيلة الموكيت الفاخر المصممة خصيصاً للمجالس السعودية الكبرى، القصور، الفنادق ذات الخمس نجوم، وقاعات المناسبات. يمتاز بعزل صوتي وحراري فائق ووبرة مخملية كثيفة تدوم لسنوات دون هبوط.',
    historySnippet: 'تم تزويد أرقى مشاريع الضيافة والقصور في الرياض وجدة بموكيت أساس الفخامة المنسوج على أنوال ألمانية وتركية متطورة تضمن دقة التفصيل وتطابق الدرجات اللونية.',
    colors: ['#1C2A3A', '#B58763', '#2D445F', '#E2DCD4'],
    idealFor: 'مجالس الرجال الكبرى، الفلل، غرف النوم الرئيسية، الممرات الفندقية، والمكاتب التنفيذية',
    features: [
      'كثافة استثنائية ونعومة فائقة مع مقاومة تامة للهبوط تحت الأقدام',
      'معالجة متقدمة ضد البقع وسهولة التنظيف الجاف',
      'عزل صوتي فائق لراحة المجالس والهدوء التام',
      'فريق متخصص للرفع المساحي والقص والتركيب الاحترافي بالرياض وجدة'
    ],
    inStock: true,
    warranty: 'ضمان التركيب وثبات الوبرة 10 سنوات'
  }
];

export const ROOM_PRESETS: RoomPreset[] = [
  {
    id: 'majlis',
    title: 'Royal Saudi Majlis',
    arabicTitle: 'مجلس ملكي فخم',
    description: 'مجلس سعودي بتشطيبات رخامية كلكتا وجلسة نيوكلاسيك مع إضاءة دافئة',
    bgGradient: 'from-[#141C28] via-[#0E1521] to-[#0A0E17]',
    accentColor: '#C58F72',
    furnitureType: 'جلسة نيوكلاسيك مع طاولة ضيافة راقية'
  },
  {
    id: 'salon',
    title: 'Luxury Living Salon',
    arabicTitle: 'صالة معيشة فاخرة',
    description: 'صالة مفتوحة بأسقف مرتفعة وجدران بألواح الخشب المعتق وأثاث إيطالي',
    bgGradient: 'from-[#162130] via-[#0F1622] to-[#0A0E17]',
    accentColor: '#3E618C',
    furnitureType: 'كنب مودرن فاخر بلون أوف وايت'
  },
  {
    id: 'dining',
    title: 'Presidential Dining Hall',
    arabicTitle: 'صالة طعام رسمية',
    description: 'غرفة سفرة فخمة مع طاولة طعام لـ 12 شخصاً وثريات كريستال عسلي',
    bgGradient: 'from-[#1E1C24] via-[#121118] to-[#0A0A0F]',
    accentColor: '#B87B5B',
    furnitureType: 'طاولة طعام خشب جوز إيطالي مع كراسي مخملية'
  },
  {
    id: 'bedroom',
    title: 'Master Palace Suite',
    arabicTitle: 'جناح نوم رئيسي',
    description: 'جناح فاخر بألوان هادئة وسرير كينج مع إضاءة مخفية وموكيت وثيق',
    bgGradient: 'from-[#151D28] via-[#0F141D] to-[#0A0D13]',
    accentColor: '#A88069',
    furnitureType: 'سرير مخملي فاخر وأرضيات باركيه وموكيت'
  }
];

export const BRANCHES_DATA: Record<'riyadh' | 'jeddah', BranchInfo> = {
  riyadh: {
    id: 'riyadh',
    name: 'فرع الرياض الرئيسي',
    city: 'الرياض',
    district: 'حي الفيصلية',
    address: 'شارع أسد السنة، حي الفيصلية، الرياض 12882',
    plusCode: 'JQJF+F6 الفيصلية، الرياض',
    googleMapsUrl: 'https://maps.google.com/?q=JQJF%2BF6+الفيصلية+الرياض',
    wazeUrl: 'https://waze.com/ul?ll=24.6294,46.7582&navigate=yes',
    coordinates: { lat: 24.6294, lng: 46.7582 },
    phone: '+966500000000',
    whatsapp: '+966500000000',
    openHours: 'يومياً: ٨:٠٠ ص - ١٠:٠٠ م (الخميس حتى ١١:٠٠ م - الجمعة من ٤:٠٠ م)',
    notes: 'مواقف فسيحة مخصصة للعملاء مع فريق استشاري متخصص لخدمتكم'
  },
  jeddah: {
    id: 'jeddah',
    name: 'فرع جدة عروس البحر الأحمر',
    city: 'جدة',
    district: 'حي البغدادية الغربية',
    address: 'حي البغدادية الغربية، جدة 22231',
    plusCode: 'F5WF+R75 حي، البغدادية الغربية، جدة 22231',
    googleMapsUrl: 'https://maps.google.com/?q=F5WF%2BR75+البغدادية+الغربية+جدة',
    wazeUrl: 'https://waze.com/ul?ll=21.5034,39.1842&navigate=yes',
    coordinates: { lat: 21.5034, lng: 39.1842 },
    phone: '+966500000000',
    whatsapp: '+966500000000',
    openHours: 'يومياً: ٩:٠٠ ص - ١٠:٣٠ م (الجمعة من ٤:٣٠ م)',
    notes: 'معرض متكامل للسجاد والموكيت الفاخر مع خدمة التوصيل والتركيب المعتمد في جدة ومكة المكرمة'
  }
};

export const STORE_HOURS_DATA = {
  schedule: [
    { day: 'السبت', hours: '٨:٠٠ ص - ١٠:٠٠ م', isOpenToday: true },
    { day: 'الأحد', hours: '٨:٠٠ ص - ١٠:٠٠ م', isOpenToday: true },
    { day: 'الإثنين', hours: '٨:٠٠ ص - ١٠:٠٠ م', isOpenToday: true },
    { day: 'الثلاثاء', hours: '٨:٠٠ ص - ١٠:٠٠ م', isOpenToday: true },
    { day: 'الأربعاء', hours: '٨:٠٠ ص - ١٠:٠٠ م', isToday: true },
    { day: 'الخميس', hours: '٨:٠٠ ص - ١١:٠٠ م', isOpenToday: true },
    { day: 'الجمعة', hours: '٤:٠٠ ع - ١١:٠٠ م', isOpenToday: true },
  ],
  busyHours: [
    { time: '٦ ص', level: 10, label: 'مغلق' },
    { time: '٩ ص', level: 45, label: 'هادئ ومثالي للاختيار' },
    { time: '١٢ م', level: 65, label: 'متوسط' },
    { time: '٣ م', level: 30, label: 'فترة استراحة' },
    { time: '٦ م', level: 85, label: 'ذروة الإقبال' },
    { time: '٩ م', level: 75, label: 'نشط قبل الإغلاق' },
  ]
};
