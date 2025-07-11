import wixData from "wix-data";

$w.onReady(function () {
  $w("#searchInput").onInput((event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filter = wixData
      .filter()
      .contains("question", searchTerm)
      .or(wixData.filter().contains("answer", searchTerm));

    $w("#faqDataset").setFilter(filter);
  });

  $w("#faqRepeater").onItemReady(($item, itemData, index) => {
    $item("#faqAnswer").collapse(); // start collapsed
    $item("#toggleIcon").src = "https://static.wixstatic.com/media/8c855d_de3c82b4d85f4983a039c69e8f9fca40~mv2.png"; // plus icon

    const toggleFAQ = () => {
      const isExpanded = !$item("#faqAnswer").collapsed;

      if (isExpanded) {
        $item("#faqAnswer").collapse();
        $item("#toggleIcon").src = "https://static.wixstatic.com/media/8c855d_de3c82b4d85f4983a039c69e8f9fca40~mv2.png"; // plus icon
      } else {
        $item("#faqAnswer").expand();
        $item("#toggleIcon").src = "https://static.wixstatic.com/media/8c855d_ea6645c36d4b41c180c915f7d4f2ddd5~mv2.png"; // minus icon
      }
    };

    $item("#faqQuestion").onClick(toggleFAQ);
    $item("#toggleIcon").onClick(toggleFAQ);
  });
});
