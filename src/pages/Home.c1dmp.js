import wixData from 'wix-data';


$w.onReady(function () {
  // Listen for input changes
  // @ts-ignore
  $w('#searchInput').onInput((event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Build the filter
    const filter = wixData.filter()
      .contains('question', searchTerm)
      .or(wixData.filter().contains('answer', searchTerm));

    // Apply the filter to the dataset
    // @ts-ignore
    $w('#faqDataset').setFilter(filter);
  });

  // @ts-ignore
  $w('#faqRepeater').onItemReady(($item, itemData, index) => {
    // Collapse all answers by default (safety)
    $item('#faqAnswer').collapse();

    // When user clicks question, toggle the answer
    $item('#faqQuestion').onClick(() => {
      const isExpanded = $item('#faqAnswer').collapsed === false;

      if (isExpanded) {
        $item('#faqAnswer').collapse();
      } else {
        $item('#faqAnswer').expand();
      }

      // Optional: toggle icon
      // if ($item('#toggleIcon')) {
      //   $item('#toggleIcon').src = isExpanded ? 'plus.svg' : 'minus.svg';
      // }
    });
  });
});
